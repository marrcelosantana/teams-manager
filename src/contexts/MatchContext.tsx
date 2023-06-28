import { createContext, ReactNode, useState } from "react";
import { PlayerDTO } from "@models/PlayerDTO";

export type MatchContextDataProps = {
  players: PlayerDTO[];
};

type MatchContextProviderProps = {
  children: ReactNode;
};

export const MatchContext = createContext<MatchContextDataProps>(
  {} as MatchContextDataProps
);

export function MatchContextProvider({ children }: MatchContextProviderProps) {
  const [players, setPlayers] = useState<PlayerDTO[]>([
    { id: "1", name: "Marcelo" },
    { id: "2", name: "Yago" },
    { id: "3", name: "Barbosa" },
    { id: "4", name: "Davi" },
    { id: "5", name: "Jaime" },
  ]);

  return (
    <MatchContext.Provider value={{ players }}>
      {children}
    </MatchContext.Provider>
  );
}
