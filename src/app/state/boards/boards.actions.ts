import { createAction, props } from '@ngrx/store';
import { Board } from '../../../component/board/board';

export const loadBoards = createAction(
  '[Boards] Load Boards',
  props<{ boards: Board[] }>()
);

export const addBoard = createAction(
  '[Boards] Add Board',
  props<{ board: Board }>()
);