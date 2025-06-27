import { Routes } from '@angular/router';
import { BoardDetailComponent } from '../component/board-detail/board-detail.component';
import { HomeComponent } from '../component/home/home.component'

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'board-detail/:id', component: BoardDetailComponent},
];
