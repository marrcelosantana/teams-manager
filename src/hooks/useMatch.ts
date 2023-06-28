import { useContext } from "react";
import { MatchContext } from "@contexts/MatchContext";

export function useMatch() {
  const context = useContext(MatchContext);
  return context;
}
