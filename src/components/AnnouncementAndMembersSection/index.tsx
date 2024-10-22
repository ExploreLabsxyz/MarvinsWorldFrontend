import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HubItem } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronDown } from "lucide-react";

interface AnnouncementAndMembersSectionProps {
  selectedHub: HubItem | null;
}

export function AnnouncementAndMembersSection({
  selectedHub,
}: AnnouncementAndMembersSectionProps) {
  const [expandedAnnouncement, setExpandedAnnouncement] = useState<
    string | null
  >(null);

  return (
    <div className="mb-4">
      {selectedHub && (
        <>
          <h4 className="font-semibold mb-2">Announcements</h4>
          <ScrollArea className="h-[100px] w-full rounded-md border p-2">
            {selectedHub.announcements.map((announcement) => (
              <Card key={announcement.id} className="mb-2">
                <CardHeader
                  className="cursor-pointer p-2"
                  onClick={() =>
                    setExpandedAnnouncement(
                      expandedAnnouncement === announcement.id
                        ? null
                        : announcement.id
                    )
                  }
                >
                  <CardTitle className="text-sm flex justify-between items-center">
                    {announcement.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedAnnouncement === announcement.id
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </CardTitle>
                </CardHeader>
                {expandedAnnouncement === announcement.id && (
                  <CardContent className="p-2">
                    <p className="text-sm">{announcement.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </ScrollArea>
        </>
      )}
    </div>
  );
}
