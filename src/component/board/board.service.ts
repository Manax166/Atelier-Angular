import { Injectable, signal } from '@angular/core';
import { Board } from './board';

@Injectable({ providedIn: 'root' })
export class BoardService {
  private _boards = signal<Board[]>([
    {
      id: 0,
      name: "Atelier Angular",
      lists: [
        { 
          id: 0,
          titre: 'À faire', 
          tasks: [
            { titre: 'quatrième tache', contenu: 'passer a la partie 2' }
          ]
        },
        {
          id: 1,
          titre: 'En cours', 
          tasks: [
            { titre: 'troisieme tache', contenu: 'finir Board' }
          ]
        },
        {
          id: 2,
          titre: 'Terminé', 
          tasks: [
            { titre: 'premiere tache', contenu: 'finir Task' },
            { titre: 'deuxieme tache', contenu: 'finir List' }
          ]
        }
      ]
    },
    {
      id: 1,
      name: "Projet Fil Rouge",
      lists: [
        {
          id: 0,
          titre: "À faire",
          tasks: [{ titre: "partie front", contenu: "ajouter interface" }]
        },
        {
          id: 1,
          titre: 'En cours', 
          tasks: []
        },
                {
          id: 2,
          titre: 'Terminé', 
          tasks: []
        },
      ]
    }
  ]);

  boards = this._boards.asReadonly();

  getBoardById(id: number): Board | undefined {
    return this._boards().find(b => b.id === id);
  }
}