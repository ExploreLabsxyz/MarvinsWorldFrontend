import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/lib/types";

interface ReplyPreviewProps {
  replyingTo: Message;
  onCancelReply: () => void;
  onClickPreview: (messageId: string) => void;
}

const ReplyPreview: React.FC<ReplyPreviewProps> = ({
  replyingTo,
  onCancelReply,
  onClickPreview,
}) => {
  return (
    <div
      className="flex items-center hover:bg-muted-foreground/10 justify-between bg-muted p-2 rounded-md mb-2"
      onClick={() => onClickPreview(replyingTo.id)}
    >
      <div className="flex items-center space-x-2 overflow-hidden cursor-pointer  p-1 rounded">
        <Avatar className="w-6 h-6 flex-shrink-0">
          <AvatarImage
            src={replyingTo.user.pfp}
            alt={replyingTo.user.username}
          />
          <AvatarFallback>
            {replyingTo.user.username.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-semibold truncate">
            {replyingTo.user.username}
          </span>
          <span className="text-xs text-muted-foreground truncate">
            {replyingTo.content}
          </span>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={onCancelReply}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ReplyPreview;
