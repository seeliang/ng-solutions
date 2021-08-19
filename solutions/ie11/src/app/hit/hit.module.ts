import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { HitComponent } from './hit.component';
 import { RouterModule } from '@angular/router';

 @NgModule({
   declarations: [HitComponent],
   imports: [
     RouterModule.forChild([
       {
         path: '',
         component: HitComponent
       }
     ]),
     CommonModule
   ]
 })
 export class MainModule { }