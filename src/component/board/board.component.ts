import { Component, computed, effect, input, signal} from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Board } from './board';

@Component({
  selector: 'app-board',
  imports: [ListComponent, ReactiveFormsModule],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class BoardComponent {
  board = input<Board>();
  taskForm : FormGroup;
  lists = computed(() => this.board()?.lists ?? [])
  
  constructor(private fb: FormBuilder) {
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
      console.log("log 1" + this.taskForm)
      return;
    }
    console.log("log2" + this.taskForm)
    const { titre, contenu, listId } = this.taskForm.value;
    if (listId !== -1) {
      const target = this.lists()[listId];
      target.tasks = [...target.tasks, { titre, contenu }];
      this.lists()[listId] = { ...target };
      console.log(target.tasks)
    }
  }
}
/*lists = signal([{ 
        id : 0,
        titre: 'a faire', tasks: [
        {titre: 'quatrième tache', contenu: 'passer a la partie 2'}
      ]
    },
    {
      id: 1,
      titre: 'en cours', tasks:[
        {titre: 'troisieme tache', contenu: 'finir Board'},
      ]
    },
    {
      id: 2,
      titre: 'termine', tasks: [
        {titre: 'premiere tache', contenu: 'finir Task'},
        {titre: 'deuxieme tache', contenu: 'finir List'}
      ]
    }
  ]);*/