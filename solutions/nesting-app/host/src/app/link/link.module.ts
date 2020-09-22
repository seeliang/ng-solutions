import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { LinkComponent } from './index';
 import { RouterModule } from '@angular/router';

 @NgModule({
   declarations: [LinkComponent],
   imports: [
     RouterModule.forChild([
       {
         path: '',
         component: LinkComponent
       }
     ]),
     CommonModule
   ]
 })
 export class LinkModule { }