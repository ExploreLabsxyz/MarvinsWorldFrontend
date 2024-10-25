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
  X,
  CheckCircle,
} from "lucide-react";
import { Rainbow } from "@/components/ui/rainbow";

interface StoryPart {
  content: string;
  characterStatus: {
    remainingCharacters: string[];
    eliminatedCharacters: string[];
  };
}

interface StreamMessage {
  type: "story" | "status";
  content?: string;
  characterStatus?: {
    remainingCharacters: string[];
    eliminatedCharacters: string[];
  };
}

interface Character {
  id: string;
  name: string;
  imageUrl: string;
  status: "active" | "eliminated";
}

const StoryStreamer = ({ characters }: { characters: Character[] }) => {
  const [storyParts, setStoryParts] = useState<StoryPart[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [lastStatus, setLastStatus] = useState<StoryPart["characterStatus"]>({
    remainingCharacters: [],
    eliminatedCharacters: [],
  });

  const [newCharacterName, setNewCharacterName] = useState("");

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
  }, [storyParts, scrollToBottom]);

  const streamStory = async () => {
    setLoading(true);
    setStoryParts([]);
    setError("");
    setIsComplete(false);
    setLastStatus({
      remainingCharacters: [],
      eliminatedCharacters: [],
    });

    const eventSource = new EventSource("http://localhost:4000/story");

    eventSource.onmessage = (event) => {
      console.log(event.data);
      if (event.data === "[DONE]") {
        setLoading(false);
        setIsComplete(true);
        eventSource.close();
        return;
      }

      try {
        const message: StreamMessage = JSON.parse(event.data);

        if (message.type === "status" && message.characterStatus) {
          setLastStatus(message.characterStatus);
        } else if (message.type === "story" && message.content) {
          setStoryParts((prev) => [
            ...prev,
            {
              content: message.content!.trim(),
              characterStatus: lastStatus,
            },
          ]);
          scrollToBottom();
        }
      } catch (e) {
        console.error("Error processing message:", e);
      }
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
      setError("Failed to load story");
      setLoading(false);
      eventSource.close();
    };

    return () => eventSource.close();
  };

  const handleCreateCharacter = () => {
    // This is a placeholder function. You'll need to implement the actual character creation logic.
    console.log("Creating new character:", newCharacterName);
    setNewCharacterName("");
  };

  return (
    <div className="w-full h-screen p-4 font-pixel flex flex-col bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl md:text-4xl mb-4">
        <Rainbow text="NATURAL SELECTION" />
      </h1>
      
      <div className="flex-grow bg-white dark:bg-gray-800 border-4 border-nintendo-gold rounded-lg p-6 shadow-lg transition-colors duration-200 flex flex-col">
        <div className="flex justify-center mb-6">
          <h2 className="text-xl md:text-3xl">
            <Rainbow text="$34,582,492" />
          </h2>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <div className="flex-grow flex flex-col">
          {/* Story Content */}
          <div className="flex-grow overflow-y-auto bg-gray-100 dark:bg-gray-800 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-6 relative transition-colors duration-200 mb-4">
            {storyParts.map((part, index) => (
              <div
                key={index}
                className="mb-4 bg-white dark:bg-gray-700 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-4 shadow-md transition-colors duration-200"
              >
                <p className="font-story text-nintendo-blue dark:text-nintendo-gold text-sm md:text-lg leading-relaxed">
                  {part.content}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-sm text-nintendo-blue dark:text-nintendo-gold animate-pulse">
                  Loading next part...
                </span>
                <Loader2 className="h-4 w-4 animate-spin text-nintendo-blue dark:text-nintendo-gold" />
              </div>
            )}
          </div>

          {/* Character Status Box */}
          <div className="flex-grow bg-gray-200 dark:bg-gray-700 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-4 transition-colors duration-200">
            <h3 className="text-lg font-bold text-nintendo-blue dark:text-nintendo-gold mb-2">
              Character Status
            </h3>
            <div className="flex justify-between">
              <div className="flex-1">
                {lastStatus && (
                  <>
                    <div className="mb-4">
                      <h4 className="font-medium flex items-center gap-2 mb-2 text-nintendo-green">
                        <Shield className="h-4 w-4" />
                        Remaining ({lastStatus.remainingCharacters.length})
                      </h4>
                      <ul className="space-y-1 text-xs">
                        {lastStatus.remainingCharacters.map((char) => (
                          <li key={char} className="text-nintendo-green">
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium flex items-center gap-2 mb-2 text-nintendo-red">
                        <Skull className="h-4 w-4" />
                        Eliminated ({lastStatus.eliminatedCharacters.length})
                      </h4>
                      <ul className="space-y-1 text-xs">
                        {lastStatus.eliminatedCharacters.map((char) => (
                          <li
                            key={char}
                            className="text-nintendo-red line-through"
                          >
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="flex-1">
                {/* Character Icons and Create New Character Box */}
                <div className="grid grid-cols-4 gap-2">
                  {characters.map((character) => (
                    <div key={character.id} className="relative">
                      <img
                        src={character.imageUrl}
                        alt={character.name}
                        className="w-full h-auto rounded-md"
                      />
                      {character.status === "eliminated" && (
                        <X
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nintendo-red"
                          size={24}
                        />
                      )}
                      {lastStatus.remainingCharacters.length === 1 &&
                        character.status === "active" && (
                          <CheckCircle
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nintendo-green"
                            size={24}
                          />
                        )}
                      <p className="text-xs mt-1 text-center truncate">
                        {character.name}
                      </p>
                    </div>
                  ))}
                  {/* Create New Character Box */}
                  <div className="border-2 border-dashed border-nintendo-blue dark:border-nintendo-gold rounded-md p-2 flex flex-col items-center justify-center">
                    <input
                      type="text"
                      value={newCharacterName}
                      onChange={(e) => setNewCharacterName(e.target.value)}
                      placeholder="New character name"
                      className="w-full mb-2 p-1 text-xs border rounded"
                    />
                    <Button
                      onClick={handleCreateCharacter}
                      className="text-xs bg-nintendo-blue dark:bg-nintendo-gold text-white px-2 py-1 rounded"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          {/* Character Status Box */}
          <div className="flex-grow bg-gray-200 dark:bg-gray-700 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-4 transition-colors duration-200">
            {/* ... existing character status content ... */}
          </div>

          {/* New circular Start Adventure button */}
          <Button
            onClick={streamStory}
            disabled={loading}
            className="ml-4 w-16 h-16 rounded-full bg-nintendo-gold dark:bg-nintendo-gold hover:bg-nintendo-gold-dark dark:hover:bg-nintendo-gold/90 text-white font-bold shadow-md transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <ChevronRight className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isComplete && (
          <div className="mt-4 text-center text-nintendo-gold dark:text-nintendo-red font-bold text-xl">
            The End of Your Adventure!
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryStreamer;
