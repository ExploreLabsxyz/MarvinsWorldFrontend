"use client";
import { useState } from "react";
import StoryStreamer from "@/components/StoryComponent";
import CharacterUploadModal from "@/components/CharacterUploadModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useCharacterSocket } from "@/hooks/useCharacterSocket";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    characters,
    currentSeasonId,
    isConnected,
    isLoading,
    error,
    changeSeason,
  } = useCharacterSocket();

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-nintendo-light-gray dark:bg-nintendo-gray text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row gap-4 p-4 bg-nintendo-light-gray dark:bg-nintendo-gray">
      {/* Character Management Sidebar */}
      <div className="w-full lg:w-80 flex flex-col gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Characters
              {isLoading && " (Loading...)"}
            </CardTitle>
            <Button
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="h-8 w-8 p-0"
              disabled={isLoading}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[70vh]">
              <div className="grid grid-cols-2 gap-2">
                {characters.map((character) => (
                  <Card
                    key={character.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      character.status === "eliminated" ? "opacity-50" : ""
                    }`}
                  >
                    <CardContent className="p-2">
                      <div className="aspect-square relative mb-2">
                        <img
                          src={character.imageUrl}
                          alt={character.name}
                          className="object-cover w-full h-full rounded-md"
                        />
                        <Badge
                          variant={
                            character.status === "active"
                              ? "default"
                              : "destructive"
                          }
                          className="absolute top-1 right-1"
                        >
                          {character.status}
                        </Badge>
                      </div>
                      <p className="text-xs font-medium truncate">
                        {character.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Story Component */}
      <div className="flex-1">
        <StoryStreamer />
      </div>

      {/* Character Upload Modal */}
      <CharacterUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
