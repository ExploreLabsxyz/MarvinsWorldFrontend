import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  ChevronDown,
  CornerDownRight,
  Image,
  MessageSquare,
  Send,
  Smile,
  Trash2,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message, User } from "@/lib/types";
import { Socket } from "socket.io-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UrlPreview } from "@/components/UrlPreview";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageUpload } from "../ImageUpload";
import { SERVER_URL, formatTimestamp } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useDropzone } from "react-dropzone";
import { EmojiPickerWrapper } from "../EmojiPickerWrapper";
import { Textarea } from "../ui/textarea";
import { Loading } from "../Loading";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import * as amplitude from "@amplitude/analytics-browser";
import ReplyPreview from "../ReplyPreview";
import ReactionList from "../ReactionList";

interface ChatAreaProps {
  chats: { [key: string]: Message[] };
  selectedChat: any | null;
  currentUser: User;
  onSendMessage: (message: string) => void;
  socket: Socket | null;
  onLoadMore: () => void;
  hasMoreMessages: boolean;
  setSelectedChat: (chat: any) => void;
  fetchingChat: boolean;
  setChats: (chats: any) => void;
}

export function ChatArea({
  chats,
  selectedChat,
  currentUser,
  onSendMessage,
  socket,
  onLoadMore,
  hasMoreMessages,
  setSelectedChat,
  fetchingChat,
  setChats,
}: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("");
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { getAccessToken } = usePrivy();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { selectedServer } = useSelector((state: RootState) => state.servers);
  const { user } = useSelector((state: RootState) => state.user);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [isLatestVisible, setIsLatestVisible] = useState(true);
  const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToMessage = useCallback((messageId: string) => {
    const messageElement = messageRefs.current[messageId];
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const scrollToBottom = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.slice(0, 2 - imageFiles.length);
      setImageFiles((prev) => [...prev, ...newFiles]);
    },
    [imageFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 2 - imageFiles.length,
    disabled: imageFiles.length >= 2 || isUploading,
  });

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReaction = (messageId: string, emoji: any) => {
    if (!socket || !currentUser || !selectedChat) return;

    const message = chats[selectedChat.id].find((m) => m.id === messageId);
    if (!message) return;

    let hasReacted = false;

    if (message.reactions) {
      const reaction = message.reactions[emoji] as any;
      if (reaction) {
        hasReacted = reaction.some(
          (reaction: any) => reaction.id === currentUser.id
        );
      }
    }

    if (hasReacted) {
      socket.emit("remove reaction", {
        messageId,
        emoji,
        userId: currentUser.id,
      });
      amplitude.track("Reaction removed", {
        userId: currentUser.id,
        messageId,
        emoji,
      });
    } else {
      socket.emit("add reaction", { messageId, emoji, userId: currentUser.id });
      amplitude.track("Reaction added", {
        userId: currentUser.id,
        messageId,
        emoji,
      });
    }
  };

  const isAdmin = useMemo(() => {
    if (!selectedServer || !user) return false;
    const currentMember = selectedServer.members.find((m) => m.id === user.id);
    if (!currentMember) return false;
    return currentMember?.roles?.some(
      (role: any) => role.permissions === 18446744073709551615
    );
  }, [selectedServer, user]);

  const handleDeleteMessage = async (message: any) => {
    if (!selectedChat || !currentUser) return;

    try {
      const accessToken = await getAccessToken();
      const response = await fetch(
        `${SERVER_URL}/channels/${selectedChat.id}/messages/${message.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete message");
      }

      toast({
        title: "Message deleted successfully",
      });
      amplitude.track("Message deleted", {
        deleter: currentUser.id,
        messageId: message.id,
        channelId: selectedChat.id,
        messageAuthor: message.user.id,
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      toast({
        title: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  const handleSendMessage = async () => {
    if (
      (newMessage.trim() || imageFiles.length > 0) &&
      selectedChat &&
      currentUser
    ) {
      setIsUploading(true);
      try {
        let embeds = [];

        if (imageFiles.length > 0) {
          const accessToken = await getAccessToken();
          const formData = new FormData();
          imageFiles.forEach((file) => {
            formData.append("images", file);
          });

          const response = await fetch(`${SERVER_URL}/upload`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to upload images");
          }

          const result = await response.json();
          embeds = result.embeds;
          amplitude.track("Image uploaded", {
            uploader: currentUser.id,
            channelId: selectedChat.id,
            parentId: replyingTo?.id,
          });
        }

        const newMessageObj: any = {
          id: Date.now().toString(),
          channel_id: selectedChat.id,
          user: currentUser,
          content: newMessage.trim(),
          embeds: embeds,
          created_at: new Date(),
          updated_at: new Date(),
          parent_id: replyingTo?.id || null,
        };

        socket?.emit(
          "stop typing",
          selectedChat?.id,
          currentUser.id,
          currentUser.username
        );

        onSendMessage(newMessageObj);
        setNewMessage("");
        setImageFiles([]);
        setReplyingTo(null);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  useEffect(() => {
    if (!selectedChat || !socket) return;

    const handleTyping = ({
      userId,
      username,
      isTyping,
    }: {
      userId: string;
      username: string;
      isTyping: boolean;
    }) => {
      setTypingUsers((prev) => {
        const newSet = new Set(prev);
        if (isTyping) {
          newSet.add(username);
        } else {
          newSet.delete(username);
        }
        return newSet;
      });
    };

    socket.on("typing", handleTyping);

    return () => {
      socket.off("typing", handleTyping);
    };
  }, [selectedChat, socket]);

  useEffect(() => {
    if (!socket) return;

    const handleReactionUpdated = (data: {
      messageId: string;
      emoji: string;
      user: User;
      action: "add" | "remove";
    }) => {
      setChats((prevChats: any) => {
        const updatedChats = { ...prevChats };
        Object.keys(updatedChats).forEach((channelId) => {
          if (Array.isArray(updatedChats[channelId])) {
            updatedChats[channelId] = updatedChats[channelId].map(
              (msg: Message) => {
                if (msg.id === data.messageId) {
                  const updatedReactions = { ...msg.reactions };

                  if (data.action === "add") {
                    if (updatedReactions[data.emoji as any]) {
                      updatedReactions[data.emoji as any] = [
                        ...updatedReactions[data.emoji as any],
                        data.user,
                      ];
                    } else {
                      updatedReactions[data.emoji as any] = [data.user];
                    }
                  } else if (data.action === "remove") {
                    if (updatedReactions[data.emoji as any]) {
                      updatedReactions[data.emoji as any] = updatedReactions[
                        data.emoji as any
                      ].filter((user: User) => user.id !== data.user.id);

                      // Remove the emoji key if there are no users left
                      if (updatedReactions[data.emoji as any].length === 0) {
                        delete updatedReactions[data.emoji as any];
                      }
                    }
                  }

                  return { ...msg, reactions: updatedReactions };
                }
                return msg;
              }
            );
          }
        });
        return updatedChats;
      });
    };

    socket.on("reaction updated", handleReactionUpdated);

    return () => {
      socket.off("reaction updated", handleReactionUpdated);
    };
  }, [socket, setChats]);

  const handleTypingStart = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    socket?.emit(
      "start typing",
      selectedChat?.id,
      currentUser.id,
      currentUser.username
    );

    typingTimeoutRef.current = setTimeout(() => {
      socket?.emit(
        "stop typing",
        selectedChat?.id,
        currentUser.id,
        currentUser.username
      );
    }, 3000);
  };

  const handleEmojiClick = async (messageId: string, emoji: string) => {
    handleReaction(messageId, emoji);
  };

  const handleLoadMore = useCallback(() => {
    if (hasMoreMessages && !isLoadingMore && !fetchingChat) {
      setIsLoadingMore(true);
      onLoadMore();
    }
  }, [hasMoreMessages, isLoadingMore, onLoadMore, fetchingChat]);

  useEffect(() => {
    setIsLoadingMore(false);
  }, [chats]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreMessages && !isLoadingMore) {
          handleLoadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleLoadMore, hasMoreMessages, isLoadingMore]);

  const renderReplyPreview = (parentPreview: any) => {
    return (
      <div
        className="flex items-center bg-gray-200 text-sm space-x-3 text-muted-foreground bg-muted rounded-md mb-2 cursor-pointer hover:bg-muted-foreground/10"
        onClick={() => scrollToMessage(parentPreview.id)}
      >
        <MessageSquare className="h-4 w-4" />
        <Avatar className="w-4 h-4">
          <AvatarImage
            src={parentPreview.user.pfp}
            alt={parentPreview.user.username}
          />
          <AvatarFallback>
            {parentPreview.user.username.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-semibold text-xs">
          {parentPreview.user.username}
        </span>
        {/* Add text wrapping to the content */}
        <span className="break-words text-xs">{parentPreview.content}</span>
      </div>
    );
  };

  const renderMessage = (message: Message, depth: number = 0) => (
    <div
      key={message.id}
      className="group bg-muted rounded-md p-1.5"
      ref={(el: any) => (messageRefs.current[message.id] = el)}
    >
      {message.parent_preview && renderReplyPreview(message.parent_preview)}

      <div className="flex items-start space-x-3">
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarImage src={message.user.pfp} alt={message.user.username} />
          <AvatarFallback>
            {message.user.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold md:text-sm break-words">
                {message.user.username}
              </span>
              <span className="text-xs text-muted-foreground break-words">
                {formatTimestamp(message.created_at)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo(message)}
                className="md:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <CornerDownRight className="h-4 w-4" />
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 w-6 p-0 md:opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Smile className="h-3 w-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <EmojiPickerWrapper
                    onEmojiSelect={(emoji) =>
                      handleEmojiClick(message.id, emoji)
                    }
                  />
                </PopoverContent>
              </Popover>
              {(message.user.id === currentUser.id || isAdmin) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteMessage(message)}
                  className="md:opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>

          {/* Add text wrapping to the message content */}
          <p className="text-xs md: text-sm leading-relaxed break-words">
            {truncateAndLinkify(message.content)}
          </p>
          {message.embeds && (
            <div className="flex flex-col space-y-2 mt-2">
              {message.embeds.map((embed, index) => (
                <UrlPreview key={index} metadata={embed} />
              ))}
            </div>
          )}
          <ReactionList
            message={message as any}
            handleEmojiClick={handleEmojiClick}
          />
        </div>
      </div>
    </div>
  );

  const truncateAndLinkify = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const maxLength = 30;

    return content.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        const truncatedUrl =
          part.length > maxLength ? part.slice(0, maxLength) + "..." : part;
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {truncatedUrl}
          </a>
        );
      }
      return part;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAutoScroll(entry.isIntersecting);
        setIsLatestVisible(entry.isIntersecting);
      },
      {
        root: scrollAreaRef.current,
        threshold: 0.01,
      }
    );

    if (scrollToRef.current) {
      observer.observe(scrollToRef.current);
    }

    return () => {
      if (scrollToRef.current) {
        observer.unobserve(scrollToRef.current);
      }
    };
  }, [chats, selectedChat]);

  useEffect(() => {
    if (shouldAutoScroll && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats, selectedChat, shouldAutoScroll]);

  return (
    <div className="flex flex-col w-full h-full bg-background border p-2">
      {selectedChat && <p className="text-center">{selectedChat.name}</p>}
      {!isLatestVisible && (
        <div className="flex flex-row justify-end">
          <Button className="" onClick={scrollToBottom}>
            <ChevronDown className="h-4 w-4 mr-2" />
            Scroll to bottom
          </Button>
        </div>
      )}
      <div className="flex-grow overflow-hidden">
        <ScrollArea
          className="h-full p-4 flex flex-col items-center"
          ref={chatScrollRef}
        >
          {hasMoreMessages && (
            <div ref={loadingRef} className="py-2 flex justify-center" />
          )}
          <div className="space-y-6">
            {selectedChat &&
              chats[selectedChat.id]?.map((message) => renderMessage(message))}
          </div>
          <div ref={scrollToRef} className="h-px" />
        </ScrollArea>
      </div>
      <div className="p-4 border-t">
        {typingUsers.size > 0 && (
          <div className="text-xs text-muted-foreground italic mb-2">
            {Array.from(typingUsers).join(", ")}{" "}
            {typingUsers.size === 1 ? "is" : "are"} typing...
          </div>
        )}
        {replyingTo && (
          <ReplyPreview
            replyingTo={replyingTo}
            onCancelReply={() => setReplyingTo(null)}
            onClickPreview={scrollToMessage}
          />
        )}
        <div className="flex items-end space-x-2">
          <Textarea
            placeholder={
              replyingTo ? "Write your reply..." : "Type your message..."
            }
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
              handleTypingStart();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (!isUploading) {
                  handleSendMessage();
                }
              }
            }}
            className="flex-grow min-h-[60px] max-h-[120px] resize-none"
          />
          <div {...getRootProps()} className="relative">
            <input {...getInputProps()} />
            <Button
              size="icon"
              variant="outline"
              className={`h-10 w-10 ${
                isDragActive ? "bg-primary text-primary-foreground" : ""
              }`}
              disabled={imageFiles.length >= 2 || isUploading}
            >
              <Image className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            size="icon"
            disabled={isUploading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {imageFiles.length > 0 && (
          <div className="flex space-x-2 mt-2">
            {imageFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Selected image ${index + 1}`}
                  className="h-16 w-16 object-cover rounded"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6"
                  onClick={() => removeImage(index)}
                  disabled={isUploading}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
