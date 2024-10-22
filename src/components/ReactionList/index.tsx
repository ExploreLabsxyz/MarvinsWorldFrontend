import React, { useState, useCallback, useRef } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ReactionProps {
  message: {
    id: string;
    reactions: Record<string, { username: string }[]>;
  };
  handleEmojiClick: (messageId: string, emoji: string) => void;
}

const LONG_PRESS_THRESHOLD = 350; // Time in ms to distinguish between tap and long press

const ReactionList: React.FC<ReactionProps> = ({
  message,
  handleEmojiClick,
}) => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressRef = useRef<boolean>(false);

  const clearLongPressTimer = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const handlePopoverToggle = useCallback((emoji: string) => {
    setOpenPopover((prev) => (prev === emoji ? null : emoji));
  }, []);

  const handleButtonPress = useCallback(
    (emoji: string) => {
      isLongPressRef.current = false;
      longPressTimerRef.current = setTimeout(() => {
        isLongPressRef.current = true;
        handlePopoverToggle(emoji); // Trigger popover on long press
      }, LONG_PRESS_THRESHOLD);
    },
    [handlePopoverToggle]
  );

  const handleButtonRelease = useCallback(
    (emoji: string) => {
      clearLongPressTimer();
      if (!isLongPressRef.current) {
        handleEmojiClick(message.id, emoji); // Trigger emoji reaction on tap
      }
      isLongPressRef.current = false;
    },
    [clearLongPressTimer, handleEmojiClick, message.id]
  );

  return (
    <>
      {message.reactions &&
        Object.entries(message.reactions).map(([emoji, users]) => (
          <Popover
            key={`${message.id}-${emoji}`}
            open={openPopover === emoji}
            onOpenChange={() => handlePopoverToggle(emoji)}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="text-xs py-0 px-2 h-6 break-words"
                onMouseEnter={() => handlePopoverToggle(emoji)}
                onMouseLeave={() => handlePopoverToggle(emoji)}
                onMouseDown={() => handleButtonPress(emoji)}
                onMouseUp={() => handleButtonRelease(emoji)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleButtonPress(emoji);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleButtonRelease(emoji);
                }}
                onTouchCancel={() => {
                  clearLongPressTimer();
                  isLongPressRef.current = false;
                }}
              >
                {emoji} {users.length}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-xs break-words">
                {users.length > 3
                  ? `${users
                      .slice(0, 3)
                      .map((user) => user.username)
                      .join(", ")} and ${users.length - 3} more`
                  : users.map((user) => user.username).join(", ")}{" "}
                reacted
              </p>
            </PopoverContent>
          </Popover>
        ))}
    </>
  );
};

export default ReactionList;
