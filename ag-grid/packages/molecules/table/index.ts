import { Component } from '@angular/core';
@Component({
    selector: 'm-table',
    templateUrl: './table.html',
  })

export class Table {
    public rowData:any[];
    public columnDefs:any[];

    constructor() {

        this.columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];
        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];
    }
}