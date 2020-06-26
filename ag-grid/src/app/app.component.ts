import { Component } from '@angular/core';
const sampleA = {
  columnDefs: [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
],
rowData : [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ag-grid';
    public tableData: object;

    constructor() {
      this.tableData = {}
    }

    ngOnInit() {
      this.tableData= sampleA
    }
}
