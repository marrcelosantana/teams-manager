import { TeamDTO } from "./TeamDTO";

export type MatchDTO = {
  team_quantity: number;
  players_by_team_quantity: number;
  teams: TeamDTO[];
};
