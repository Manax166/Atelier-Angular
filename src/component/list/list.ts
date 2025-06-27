import { Task } from "../task/task";

export interface List {
  id: number;
  titre: string;
  tasks: Task[];
}