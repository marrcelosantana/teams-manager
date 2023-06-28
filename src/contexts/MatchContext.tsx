import { createContext, ReactNode, useState } from "react";

import { PlayerDTO } from "@models/PlayerDTO";
import { useAuth } from "@hooks/useAuth";

import {
  createPlayer,
  getAllPlayers,
  removePlayerFromStorage,
} from "@storage/storagePlayers";

export type MatchContextDataProps = {
  players: PlayerDTO[];
  fetchPlayers: () => Promise<void>;
  registerPlayer: (player: PlayerDTO) => Promise<void>;
  removePlayer: (playerId: string) => Promise<void>;
};

type MatchContextProviderProps = {
  children: ReactNode;
};

export const MatchContext = createContext<MatchContextDataProps>(
  {} as MatchContextDataProps
);

export function MatchContextProvider({ children }: MatchContextProviderProps) {
  const { user } = useAuth();
  const [players, setPlayers] = useState<PlayerDTO[]>([]);

  async function fetchPlayers() {
    try {
      const data = await getAllPlayers(user.id);
      setPlayers(data);
    } catch (error) {
      throw error;
    }
  }

  async function registerPlayer(player: PlayerDTO) {
    try {
      await createPlayer(player, user.id);
      await fetchPlayers();
    } catch (error) {
      throw error;
    }
  }

  async function removePlayer(playerId: string) {
    try {
      await removePlayerFromStorage(playerId, user.id);
      await fetchPlayers();
    } catch (error) {
      throw error;
    }
  }

  return (
    <MatchContext.Provider
      value={{ players, fetchPlayers, registerPlayer, removePlayer }}
    >
      {children}
    </MatchContext.Provider>
  );
}
