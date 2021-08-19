import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { MainComponent } from './main.component';
 import { RouterModule } from '@angular/router';

 @NgModule({
   declarations: [MainComponent],
   imports: [
     RouterModule.forChild([
       {
         path: '',
         component: MainComponent
       }
     ]),
     CommonModule
   ]
 })
 export class MainModule { }