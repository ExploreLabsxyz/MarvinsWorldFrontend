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
} from "lucide-react";

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

const StoryStreamer = () => {
  const [storyParts, setStoryParts] = useState<StoryPart[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [lastStatus, setLastStatus] = useState<StoryPart["characterStatus"]>({
    remainingCharacters: [],
    eliminatedCharacters: [],
  });

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

  return (
    <div className="w-full h-screen p-4 font-pixel flex flex-col bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow bg-white dark:bg-gray-800 border-4 border-nintendo-gold rounded-lg p-6 shadow-lg transition-colors duration-200 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl text-nintendo-blue dark:text-nintendo-gold text-center flex-grow">
            Marvins World
          </h1>
        </div>
        <div className="flex justify-center mb-6">
          <Button
            onClick={streamStory}
            disabled={loading}
            className="bg-nintendo-blue dark:bg-nintendo-red hover:bg-nintendo-blue-dark dark:hover:bg-nintendo-red/90 text-white font-bold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-200"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Story...
              </>
            ) : (
              "Start New Adventure"
            )}
          </Button>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Character Status Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-gray-200 dark:bg-gray-700 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-4 transition-colors duration-200">
              <h3 className="text-lg font-bold text-nintendo-blue dark:text-nintendo-gold mb-2">
                Character Status
              </h3>
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
          </div>

          {/* Story Content */}
          <div className="md:col-span-3 flex flex-col h-[calc(100vh-12rem)]">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-grow overflow-y-auto bg-gray-100 dark:bg-gray-800 border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-6 relative transition-colors duration-200"
            >
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

            {isComplete && (
              <div className="mt-4 text-center text-nintendo-gold dark:text-nintendo-red font-bold text-xl">
                The End of Your Adventure!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryStreamer;
