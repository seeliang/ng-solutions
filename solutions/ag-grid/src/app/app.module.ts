import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from "@ag-grid-community/angular";
import { AppComponent } from './app.component';
import { Table } from '../../packages';

@NgModule({
  declarations: [
    AppComponent,
    Table,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
