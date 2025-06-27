import { Component, computed, input, signal } from '@angular/core';
import { Task } from '../task/task.component';
import { List } from './list';

@Component({
  selector: 'app-list',
  imports: [Task],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  list = input<List>();
  tasks = computed(() => this.list()?.tasks ?? []);
  titre = computed(() => this.list()?.titre ?? '');

  taskList = signal(this.tasks())
}
