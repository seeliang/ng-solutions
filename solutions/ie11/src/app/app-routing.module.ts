import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'
import {MainComponent} from './main/main.component'
import { HitComponent} from './hit/hit.component'


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
    //loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'hit',
    component: HitComponent
    //loadChildren: () => import('./hit/hit.module').then(m => m.MainModule)
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
