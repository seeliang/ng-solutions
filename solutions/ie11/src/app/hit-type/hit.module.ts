import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { HitTypeComponent } from './hit-type.component';
 import { RouterModule } from '@angular/router';

 @NgModule({
   declarations: [HitTypeComponent],
   imports: [
     RouterModule.forChild([
       {
         path: '',
         component: HitTypeComponent
       }
     ]),
     CommonModule
   ]
 })
 export class MainModule { }