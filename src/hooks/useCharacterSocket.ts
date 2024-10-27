// src/hooks/useCharacterSocket.ts
"use client";
import { Character, Story, Season } from "@/lib/types";
import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export function useCharacterSocket(initialSeasonId?: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSeasonId, setCurrentSeasonId] = useState<string | undefined>(
    initialSeasonId
  );
  const [isLoading, setIsLoading] = useState(true);
  const [seasonStatus, setSeasonStatus] = useState<boolean>(false);
  const [seasons, setSeasons] = useState<Season[]>([]); // Add seasons state

  const fetchSeasonData = useCallback(
    (seasonId: string) => {
      if (socket?.connected) {
        setIsLoading(true);
        setCurrentSeasonId(seasonId);
        setCharacters([]);
        setStories([]);
        setWinner(null);
        socket.emit("fetch_season", seasonId);
        socket.emit("request_characters", seasonId);
        socket.emit("request_stories", seasonId);
      }
    },
    [socket]
  );

  useEffect(() => {
    const socketInstance = io(
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
      {
        withCredentials: true,
      }
    );

    socketInstance.on("connect", () => {
      setIsConnected(true);
      setError(null);
      socketInstance.emit("request_characters", initialSeasonId);
      socketInstance.emit("request_stories", initialSeasonId);
      socketInstance.emit("request_seasons"); // Request all seasons
    });

    // Add seasons handler
    socketInstance.on("seasons_data", (seasonsData: Season[]) => {
      setSeasons(seasonsData);
      // Set the current season to the last season in the list
      setCurrentSeasonId(seasonsData[seasonsData.length - 1].id);
    });

    // Add winner handler
    socketInstance.on(
      "winner_declared",
      ({ winnerId }: { winnerId: string }) => {
        setWinner(winnerId);
      }
    );

    // Reset winner when changing seasons
    socketInstance.on("new_season", ({ seasonId }: { seasonId: string }) => {
      setCurrentSeasonId(seasonId);
      setStories([]);
      setWinner(null); // Reset winner for new season
    });

    socketInstance.on("disconnect", () => {
      setIsConnected(false);
    });

    socketInstance.on("error", (message: string) => {
      setError(message);
      setIsLoading(false);
    });

    socketInstance.on("characters_reset", () => {
      setCharacters([]); // Clear the list
      setIsLoading(true);
    });

    socketInstance.on("stories_reset", () => {
      setStories([]); // Clear the stories list
    });

    socketInstance.on("initial_stories", (initialStories: Story[]) => {
      setStories(initialStories);
    });

    socketInstance.on(
      "initial_characters",
      (initialCharacters: Character[]) => {
        setCharacters(initialCharacters);
        setIsLoading(false);
      }
    );

    socketInstance.on(
      "character_update",
      ({ type, data }: { type: string; data: Character }) => {
        // Only process updates for the current season
        setCharacters((prev) => {
          switch (type) {
            case "INSERT":
              return [data, ...prev];
            case "UPDATE":
              return prev.map((char) => (char.id === data.id ? data : char));
            case "DELETE":
              return prev.filter((char) => char.id !== data.id);
            default:
              return prev;
          }
        });
      }
    );

    // Add new story update handler
    socketInstance.on(
      "story_update",
      ({ type, data }: { type: string; data: Story }) => {
        setStories((prev) => {
          switch (type) {
            case "INSERT":
              return [data, ...prev];
            case "UPDATE":
              return prev.map((story) => (story.id === data.id ? data : story));
            case "DELETE":
              return prev.filter((story) => story.id !== data.id);
            default:
              return prev;
          }
        });
      }
    );

    // Update the season status change handler
    socketInstance.on(
      "season_status_change",
      ({ status, seasonId }: { status: boolean; seasonId: string }) => {
        if (seasonId === currentSeasonId) {
          setSeasonStatus(status);
        }
      }
    );

    // Add new season handler
    socketInstance.on("new_season", ({ seasonId }: { seasonId: string }) => {
      //TODO: request characters and stories for new season
      // setCurrentSeasonId(seasonId);
      // setStories([]); // Reset stories for new season
    });

    // Add season update handler
    socketInstance.on(
      "season_update",
      ({ type, data }: { type: string; data: Season }) => {
        setSeasons((prev) => {
          switch (type) {
            case "INSERT":
              return [...prev, data];
            case "UPDATE":
              return prev.map((season) =>
                season.id === data.id ? data : season
              );
            case "DELETE":
              return prev.filter((season) => season.id !== data.id);
            default:
              return prev;
          }
        });
      }
    );

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [initialSeasonId]);

  return {
    socket,
    characters,
    stories,
    isConnected,
    error,
    changeSeason: fetchSeasonData,
    isLoading,
    currentSeasonId,
    setCurrentSeasonId,
    seasonStatus,
    winner,
    seasons,
  };
}
