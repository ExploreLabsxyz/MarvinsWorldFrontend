import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/types";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

interface MembersListProps {
  members: User[];
  onInviteMember: () => void;
}

export function MembersList({ members, onInviteMember }: MembersListProps) {
  const { selectedServer } = useSelector((state: RootState) => state.servers);
  // Sort members by status: online (true) first, offline (false) second
  const sorted_members = [...members].sort((a, b) =>
    a.status === b.status ? 0 : a.status ? -1 : 1
  );

  return sorted_members ? (
    <div className="w-full h-full border p-4">
      <h4 className="font-semibold">{selectedServer?.name} members</h4>
      <ScrollArea className="h-[400px] w-full rounded-none p-2 overflow-y-auto">
        {sorted_members.map((member) => (
          <div key={member.id} className="flex items-center space-x-2 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={member.pfp} alt={member.username} />
              <AvatarFallback>
                {member.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{member.username}</span>
            <span
              className={`w-2 h-2 rounded-full ${
                member.status ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </div>
        ))}
      </ScrollArea>
    </div>
  ) : null;
}
