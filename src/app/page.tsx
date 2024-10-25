"use client";
import { useState } from "react";
import StoryStreamer from "@/components/StoryComponent";
import CharacterUploadModal from "@/components/CharacterUploadModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
    <main className="min-h-screen w-full flex flex-col gap-4 p-4 bg-nintendo-light-gray dark:bg-nintendo-gray">
      {/* Story Component */}
      <div className="flex-1">
        <StoryStreamer characters={characters} />
      </div>

      {/* Add Character Button */}
      <div className="fixed bottom-4 right-4">
        <Button
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="h-12 w-12 rounded-full"
          disabled={isLoading}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      {/* Character Upload Modal */}
      <CharacterUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
