import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BoardService } from '../board/board.service';
import { Board } from "../board/board";
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-board-detail',
  imports: [BoardComponent, RouterModule],
  templateUrl: './board-detail.html',
  styleUrl: './board-detail.css'
})
export class BoardDetailComponent {
  constructor(private route: ActivatedRoute,private boardService: BoardService) {}
  board = signal<Board | undefined>(undefined);
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundBoard = this.boardService.getBoardById(id);
    this.board.set(foundBoard);
  }
}
