import { List } from "../list/list";

export interface Board {
  id: number;
  name: string;
  lists: List[];
}