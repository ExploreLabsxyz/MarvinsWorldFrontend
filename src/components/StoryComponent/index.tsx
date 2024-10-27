"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Skull,
  Plus,
  ChevronDown,
  Trophy,
} from "lucide-react";
import { useCharacterSocket } from "@/hooks/useCharacterSocket";
import { Badge } from "@/components/ui/badge";
import CharacterUploadModal from "../CharacterUploadModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Season {
  id: string;
  number: number;
  winnerId?: string;
}

interface StoryComponentProps {
  seasonId?: string;
}

const ITEMS_PER_PAGE = 5;

const StoryStreamer: React.FC<StoryComponentProps> = ({ seasonId }) => {
  const {
    socket,
    isConnected,
    isLoading: isSocketLoading,
    error: socketError,
    characters,
    stories,
    seasonStatus,
    currentSeasonId,
    seasons,
    winner,
    changeSeason, // We'll use this
  } = useCharacterSocket(seasonId);

  const [currentSeason, setCurrentSeason] = useState<Season | null>(null);
  const [currentSelectedSeasonId, setCurrentSelectedSeasonId] = useState<
    string | null
  >(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate pagination
  const totalPages = Math.max(...stories.map((story) => story.page), 0);
  const currentStories = stories
    .slice()
    .reverse()
    .filter((story) => story.page === currentPage);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const isAtBottom = useRef(true);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current && isAtBottom.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      isAtBottom.current = scrollTop + clientHeight >= scrollHeight - 10;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const renderConnectionStatus = () => {
    if (isSocketLoading) {
      return (
        <div className="text-nintendo-blue dark:text-nintendo-gold text-center mb-4">
          Connecting to server...
        </div>
      );
    }
    if (socketError) {
      return <div className="text-red-500 text-center mb-4">{socketError}</div>;
    }
    if (!isConnected) {
      return (
        <div className="text-red-500 text-center mb-4">
          Disconnected from server
        </div>
      );
    }
    return null;
  };

  const renderCharacterStatus = () => {
    return (
      <div className="bg-gray-200 dark:bg-gray-700 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-4 transition-colors duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-nintendo-blue dark:text-nintendo-gold">
              Characters
            </h3>
            {seasonStatus && (
              <Badge
                variant="secondary"
                className="bg-nintendo-gold text-white text-xs"
              >
                Season Active
              </Badge>
            )}
          </div>

          {!seasonStatus && !isSocketLoading && (
            <Button
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="h-8 w-8 p-0"
              title="Add character"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {characters.map((char) => (
            <div
              key={char.id}
              className={`relative group perspective-1000 transition-transform duration-300 hover:scale-105 cursor-pointer min-h-[120px]`}
            >
              <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                <div
                  className={`
                  relative rounded-lg p-3
                
                  border-2 ${
                    char.id === winner
                      ? "border-yellow-600"
                      : char.status === "eliminated"
                      ? "border-nintendo-red"
                      : "border-nintendo-green"
                  }
                  shadow-lg transform-style-3d backface-hidden
                  ${char.status === "eliminated" ? "opacity-70" : "opacity-100"}
                  min-h-[120px]
                `}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] rounded-full overflow-hidden border-2 border-nintendo-gold">
                      <img
                        src={char.imageUrl}
                        alt={char.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className={`
                      font-medium text-xs
                      ${
                        char.status === "eliminated"
                          ? "text-nintendo-red line-through"
                          : "text-nintendo-green"
                      }
                    `}
                    >
                      {char.name}
                    </span>
                  </div>
                  {char.status === "eliminated" && (
                    <div className="absolute top-1 right-1">
                      <Skull className="h-3 w-3 text-nintendo-red" />
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1">
                    <div className="text-[10px] text-gray-500 dark:text-gray-400">
                      {char.status === "eliminated" ? "Eliminated" : "Active"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!seasonStatus && characters.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-4 text-xs">
              No characters added yet
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleSeasonSelect = (selectedSeasonId: string) => {
    setCurrentSelectedSeasonId(selectedSeasonId);
    changeSeason(selectedSeasonId); // Fetch data for the new season
  };

  const renderSeasonSelector = () => {
    return (
      <div className="flex items-center gap-2 mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-nintendo-blue dark:text-nintendo-gold"
            >
              {currentSelectedSeasonId
                ? `${
                    seasons.find((s) => s.id === currentSelectedSeasonId)
                      ?.name || ""
                  }`
                : "Select Season"}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {seasons.map((season: any) => (
              <DropdownMenuItem
                key={season.id}
                onClick={() => handleSeasonSelect(season.id)}
                className="flex items-center justify-between gap-4"
              >
                <span>{season?.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-screen p-4 font-pixel flex flex-col bg-gray-100 dark:bg-gray-900">
        {renderConnectionStatus()}
        <div className="flex-grow bg-white dark:bg-gray-800 border-4 border-nintendo-gold rounded-lg p-6 shadow-lg transition-colors duration-200 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-4xl text-nintendo-blue dark:text-nintendo-gold text-center flex-grow">
              Marvins World
            </h1>
          </div>
          {renderSeasonSelector()} {/* Add season selector */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Character Status Sidebar */}
            <div className="md:col-span-1 space-y-4">
              {renderCharacterStatus()}
            </div>

            {/* Story Content with Pagination */}
            <div className="md:col-span-3 flex flex-col h-[calc(100vh-12rem)]">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex-grow overflow-y-auto bg-gray-100 dark:bg-gray-800 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-6 relative transition-colors duration-200"
              >
                {currentStories.map((story) => (
                  <p className="font-story text-nintendo-blue dark:text-nintendo-gold text-sm md:text-lg leading-relaxed">
                    {story.content}
                  </p>
                ))}
                {isSocketLoading && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-sm text-nintendo-blue dark:text-nintendo-gold animate-pulse">
                      Loading story...
                    </span>
                    <Loader2 className="h-4 w-4 animate-spin text-nintendo-blue dark:text-nintendo-gold" />
                  </div>
                )}
              </div>

              {stories.length === 0 && !isSocketLoading && (
                <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
                  No story parts available yet
                </div>
              )}

              {stories.length > 0 && (
                <div className="flex justify-center mt-4">
                  <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mx-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Character Upload Modal */}
      <CharacterUploadModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default StoryStreamer;
