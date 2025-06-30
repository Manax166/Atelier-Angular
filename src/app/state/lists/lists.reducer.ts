import { createReducer, on } from "@ngrx/store";
//import { addTask } from "./lists.actions";
import { Board } from "../../../component/board/board";

export const initialState: Board = {
  id: 1,
  name: 'Mon tableau de tâches',
  lists: [
    {
      id: 0,
      titre: 'À faire',
      tasks: []
    },
    {
      id: 1,
      titre: 'En cours',
      tasks: []
    },
    {
      id: 2,
      titre: 'Fait',
      tasks: []
    }
  ]
};

/*export const listsReducer = createReducer(
    initialState,
    on(addTask, (state, {titre, contenu, listId }) => {
    const  updatedLists = state.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: [...list.tasks, { titre, contenu }]
        };
      }
      return list;
    });

    return {
      ...state,
      lists: updatedLists
    };
  })
);*/