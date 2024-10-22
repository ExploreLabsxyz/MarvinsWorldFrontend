import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SERVER_URL } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";

interface Invite {
  id: string;
  serverId: string;
  serverName: string;
  token: string;
}

interface InvitesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvitesModal({ isOpen, onClose }: InvitesModalProps) {
  const [invites, setInvites] = useState<Invite[]>([]);
  const { getAccessToken } = usePrivy();

  useEffect(() => {
    // Fetch invites from the server
    const fetchInvites = async () => {
      const accessToken = await getAccessToken();
      try {
        const response = await fetch(`${SERVER_URL}/invites`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch invites");
        }
        const data = await response.json();
        setInvites(data);
      } catch (error) {
        // console.log("Error fetching invites:", error);
      }
    };

    if (isOpen) {
      fetchInvites();
    }
  }, [isOpen]);

  const handleAcceptInvite = async (token: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${SERVER_URL}/invites/accept`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error("Failed to accept invite");
      }
      setInvites(invites.filter((invite) => invite.id !== token));
    } catch (error) {
      console.error("Error accepting invite:", error);
    }
  };

  const handleDeclineInvite = async (token: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${SERVER_URL}/invites/decline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error("Failed to decline invite");
      }
      setInvites(invites.filter((invite) => invite.id !== token));
    } catch (error) {
      console.error("Error declining invite:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Server Invites</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full">
          {invites.map((invite) => (
            <div
              key={invite.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{invite.serverName}</span>
              <div>
                <Button
                  onClick={() => handleAcceptInvite(invite.token)}
                  className="mr-2"
                >
                  Accept
                </Button>
                <Button
                  onClick={() => handleDeclineInvite(invite.token)}
                  variant="outline"
                >
                  Decline
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
