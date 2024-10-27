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
      {/* Story Component */}
      <div className="flex-1">
        <StoryStreamer />
      </div>
    </main>
  );
}
