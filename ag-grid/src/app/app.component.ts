import { Component } from '@angular/core';
const columnDefs = [
  {headerName: "Make", field: "make", sortable: true},
  {headerName: "Model", field: "model"},
  {headerName: "Price", field: "price"},
];

const sampleA = {
  columnDefs,
  rowData : [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ]
}

const sampleB = {
  columnDefs,
  rowData : [
    {make: "Mercedes", model: "A180", price: 45000},
    {make: "BMW", model: "2", price: 42000},
    {make: "Audi", model: "A3", price: 42000}
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
    onLoadA() {
      this.tableData= sampleA
    }
    onLoadB() {
      this.tableData= sampleB
    }
}
