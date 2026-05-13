import { League } from "./league";

export interface Tag {
  label: string;
}

export interface Team {
  id: string;
  isFavorite?: boolean | null;
  league?: League | null;
  logo: string;
  name: string;
  tags?: Tag[] | null;
}
