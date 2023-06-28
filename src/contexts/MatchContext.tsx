import { createContext, ReactNode, useState } from "react";
import { PlayerDTO } from "@models/PlayerDTO";
import { createPlayer, getAllPlayers } from "@storage/storagePlayers";

export type MatchContextDataProps = {
  players: PlayerDTO[];
  fetchPlayers: () => Promise<void>;
  registerPlayer: (player: PlayerDTO) => Promise<void>;
};

type MatchContextProviderProps = {
  children: ReactNode;
};

export const MatchContext = createContext<MatchContextDataProps>(
  {} as MatchContextDataProps
);

export function MatchContextProvider({ children }: MatchContextProviderProps) {
  const [players, setPlayers] = useState<PlayerDTO[]>([]);

  async function fetchPlayers() {
    try {
      const data = await getAllPlayers();
      setPlayers(data);
    } catch (error) {
      throw error;
    }
  }

  async function registerPlayer(player: PlayerDTO) {
    try {
      await createPlayer(player);
      await fetchPlayers();
    } catch (error) {
      throw error;
    }
  }

  return (
    <MatchContext.Provider value={{ players, fetchPlayers, registerPlayer }}>
      {children}
    </MatchContext.Provider>
  );
}
