import { Component, inject, signal } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { BoardDetailComponent } from '../board-detail/board-detail.component';
import { Router, RouterModule } from '@angular/router';
import { BoardService } from '../board/board.service';
import { loadBoards } from '../../app/state/boards/boards.actions';
import { Store } from '@ngrx/store';
import { Board } from '../board/board';

@Component({
  selector: 'app-home',
  imports: [BoardDetailComponent, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private store = inject(Store<{ boards: Board[] }>);
  private boardService = inject(BoardService);
  private router = inject(Router);

  ngOnInit() {
    this.store.dispatch(loadBoards({ boards: this.boardService.boards() }));
  }
  goToBoardDetail(id: number) {
    this.router.navigate(['/board-detail', id]);
  }
}
