// src/hooks/useCharacterSocket.ts
"use client";
import { Character } from "@/lib/types";
import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export function useCharacterSocket(initialSeasonId?: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSeasonId, setCurrentSeasonId] = useState<string | undefined>(
    initialSeasonId
  );
  const [isLoading, setIsLoading] = useState(true);

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
      // Request initial data
      socketInstance.emit("request_characters", initialSeasonId);
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
        console.log(data);
        console.log("type", type);
        // Only process updates for the current season
        if (data.seasonId === currentSeasonId) {
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
      }
    );

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [initialSeasonId]);

  const changeSeason = useCallback(
    (seasonId: string) => {
      if (socket?.connected) {
        setCurrentSeasonId(seasonId);
        socket.emit("change_season", seasonId);
      }
    },
    [socket]
  );

  return {
    socket,
    characters,
    isConnected,
    error,
    changeSeason,
    isLoading,
    currentSeasonId,
  };
}
