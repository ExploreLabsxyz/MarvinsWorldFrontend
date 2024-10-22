import { useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  MessageSquare,
  Plus,
  Link,
  Infinity,
  AlertCircle,
  Trash2,
} from "lucide-react";
import { HubItem } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSelectedServer } from "@/store/slices/serverSlice";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { usePrivy } from "@privy-io/react-auth";
import { SERVER_URL } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import * as amplitude from "@amplitude/analytics-browser";

interface HubNavigationProps {
  hubs: HubItem[];
  onSelectChat: (chat: any) => void;
  onCreateServer: () => void;
  onOpenInvites: () => void;
  selectedChat: any;
  selectedHub: HubItem;
  isLoading: boolean;
}

export function HubNavigation({
  hubs,
  onSelectChat,
  selectedChat,
  selectedHub,
  onCreateServer,
  onOpenInvites,
  isLoading,
}: HubNavigationProps) {
  const { selectedServer } = useSelector((state: RootState) => state.servers);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [inviteUses, setInviteUses] = useState<number>(1);
  const [noExpiration, setNoExpiration] = useState<boolean>(true);
  const { getAccessToken } = usePrivy();
  const tempInputRef = useRef<HTMLInputElement>(null);
  // Manage state for collapsibles
  const [openHubs, setOpenHubs] = useState<Record<string, boolean>>({});

  const handleSelectHub = (hub: HubItem) => {
    amplitude.track("Server clicked on", {
      serverId: hub.id,
      userId: user?.id,
    });
    dispatch(setSelectedServer(hub));
  };

  const handleDeleteServer = async (serverId: string) => {
    if (
      window.confirm(
        "Are you sure you want to delete this server? This action cannot be undone."
      )
    ) {
      try {
        const response = await fetch(`${SERVER_URL}/servers/${serverId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete server");
        }

        amplitude.track("Server Deleted", { serverId, userId: user?.id });
        toast({
          title: "Server deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting server:", error);
        toast({
          title: "Failed to delete server",
          variant: "destructive",
        });
      }
    }
  };

  const handleCreateInvite = async (serverId: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${SERVER_URL}/invites/${serverId}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          uses: inviteUses === 100 ? 0 : inviteUses, // 0 means unlimited
          expiresAt: noExpiration ? null : undefined, // null means no expiration
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create invite");
      }

      const data = await response.json();
      const inviteUrl = `${window.location.origin}/invite/${data.token}`;
      amplitude.track("Invite made", { serverId, userId: user?.id });

      // Attempt to use the clipboard API
      try {
        await navigator.clipboard.writeText(inviteUrl);
        toast({
          title: "Created Invite",
          description: "Invite link copied.",
        });
      } catch (clipboardError) {
        console.error("Error writing to clipboard:", clipboardError);

        // Fallback method using a temporary input element
        if (tempInputRef.current) {
          tempInputRef.current.value = inviteUrl;
          tempInputRef.current.select();
          document.execCommand("copy");
          toast({
            title: "Created Invite",
            description: "Invite link copied.",
          });
        } else {
          throw new Error("Fallback method failed");
        }
      }
    } catch (error) {
      console.error("Error creating invite:", error);
      toast({
        title: "Failed to create or copy invite",
        description: "Please try again or copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const isUserAdminInServer = (item: HubItem) => {
    const userMember = item.members?.find((member) => member.id === user?.id);
    return userMember && userMember.roles
      ? userMember?.roles.some((role: any) => {
          return role?.permissions === 18446744073709552000;
        }) || false
      : false;
  };

  const toggleCollapsible = (hubId: string) => {
    setOpenHubs((prevState) => ({
      ...prevState,
      [hubId]: !prevState[hubId],
    }));
  };

  const renderHubStructure = (items: HubItem[], depth = 0) => (
    <>
      {items.map((item) => (
        <div key={item.id} className="flex items-center">
          <Collapsible
            key={item.id}
            open={selectedHub.id === item.id || openHubs[item.id]}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-between pl-${4 + depth * 4}`}
                onClick={() => {
                  handleSelectHub(item);
                  toggleCollapsible(item.id);
                }}
              >
                <span className="flex items-center">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="ml-2">{item.name}</span>
                </span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {/* Render Channels for the Hub */}
              {item.channels &&
                item.channels.map((channel: any) => (
                  <Button
                    key={channel.id}
                    variant="ghost"
                    className={`w-full justify-start pl-${8 + depth * 4}`}
                    onClick={() => {
                      amplitude.track("Chat clicked on", {
                        chatId: channel.id,
                        userId: user?.id,
                        serverId: item?.id,
                      });
                      onSelectChat(channel);
                    }}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {channel.name}
                  </Button>
                ))}

              {/* Render Threads for the Hub */}
              {item.threads &&
                item.threads.map((thread) => (
                  <Button
                    key={thread.id}
                    variant="ghost"
                    className={`w-full justify-start pl-${8 + depth * 4}`}
                    onClick={() => onSelectChat(thread)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {thread.title}
                  </Button>
                ))}

              {item.subHubs && renderHubStructure(item.subHubs, depth + 1)}
            </CollapsibleContent>
          </Collapsible>
          <div className="flex">
            {isUserAdminInServer(item) && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Link className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Invite Settings</h4>
                    <div className="flex items-center justify-between">
                      <span>Uses:</span>
                      <div className="flex items-center space-x-2">
                        <Slider
                          value={[inviteUses]}
                          onValueChange={(value) => setInviteUses(value[0])}
                          max={100}
                          step={1}
                          className="w-[100px]"
                        />
                        {inviteUses === 100 ? (
                          <Infinity className="w-4 h-4" />
                        ) : (
                          inviteUses
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={async () => await handleCreateInvite(item.id)}
                      className="w-full"
                    >
                      Generate and Copy Invite
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
            {isUserAdminInServer(item) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteServer(item.id)}
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );

  const renderSkeleton = () => (
    <div className="space-y-2">
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} className="h-8 w-full" />
      ))}
    </div>
  );

  const renderEmptyState = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">No Hubs Available</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You do not have any servers yet. Create a new server or get an invite
          to get started.
        </p>
        <div className="flex flex-col space-y-2"></div>
      </CardContent>
    </Card>
  );

  return (
    <div className="col-span-1 border rounded-none p-4">
      <input
        ref={tempInputRef}
        type="text"
        className="sr-only"
        aria-hidden="true"
      />
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Servers</h3>
      </div>
      <ScrollArea className="h-full">
        {isLoading
          ? renderSkeleton()
          : hubs.length > 0
          ? renderHubStructure(hubs)
          : renderEmptyState()}
      </ScrollArea>
    </div>
  );
}
