import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from "../component/board/board.component";
import { HomeComponent } from '../component/home/home.component';
import { BoardDetailComponent } from '../component/board-detail/board-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoardComponent, HomeComponent, BoardDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TP1';
}
