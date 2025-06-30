import { Component, computed, effect, input,} from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Board } from './board';
import { Store } from '@ngrx/store';
//import { addTask } from '../../app/state/lists/lists.actions';

@Component({
  selector: 'app-board',
  imports: [ListComponent, ReactiveFormsModule],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class BoardComponent {
  board = input<Board>();
  taskForm : FormGroup;
  lists = computed(() => this.board()?.lists ?? []);
  
  constructor(private fb: FormBuilder, private store: Store) {
    this.taskForm = this.fb.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      listId: ['', Validators.required]
    });
  }
  listChangedEffect = effect(() => {
    const listMAJ = this.lists;
    console.log('Liste mise à jour : ', listMAJ);
  })
  addTaskFromForm() {
    if(this.taskForm.invalid) {
      return;
    }
    const { titre, contenu, listId } = this.taskForm.value;

    /*this.store.dispatch(addTask({ titre, contenu, listId }));*/
    if (listId !== -1) {
      const target = this.lists()[listId];
      target.tasks = [...target.tasks, { titre, contenu }];
      this.lists()[listId] = { ...target };
      console.log(target.tasks)
    }
  }
}