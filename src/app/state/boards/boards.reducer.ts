import { createReducer, on } from '@ngrx/store';
import { loadBoards, addBoard,} from './boards.actions';
import { Board } from '../../../component/board/board';


export const initialState: Board[] = [];

export const boardsReducer = createReducer(
  initialState,
  on(loadBoards, (state, { boards }) => [...boards]),
  on(addBoard, (state, { board }) => [...state, board])
);