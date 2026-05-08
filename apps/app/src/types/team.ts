import { League } from "./league";

export interface Tag {
  label: string;
}

export interface Team {
  id: string;
  league: League;
  logo: string;
  name: string;
  tags: Tag[];
}
