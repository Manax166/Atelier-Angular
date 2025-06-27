import { Component, inject, signal } from '@angular/core';
import { BoardDetailComponent } from '../board-detail/board-detail.component';
import { Router, RouterModule } from '@angular/router';
import { BoardService } from '../board/board.service';
import { loadBoards } from '../../app/state/boards/boards.actions';
import { Store } from '@ngrx/store';
import { Board } from '../board/board';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AsyncPipe,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private store = inject(Store<{ boards: Board[] }>);
  private boardService = inject(BoardService);
  private router = inject(Router);

  boards$ = this.store.select('boards');

  ngOnInit() {
    this.store.dispatch(loadBoards({ boards: this.boardService.boards() }));
  }
  goToBoardDetail(id: number) {
    this.router.navigate(['/board-detail', id]);
  }
}
