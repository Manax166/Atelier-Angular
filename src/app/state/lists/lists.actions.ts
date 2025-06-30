import { createAction, props } from "@ngrx/store";



export const addTask = createAction(
  '[Task] Add Task',
  props<{ titre: string; contenu: string; listId: number }>()
);