import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  task = input<{ titre: string; contenu: string }>();
  titre = signal(this.task()?.titre);
  contenu = signal(this.task()?.contenu);
}
