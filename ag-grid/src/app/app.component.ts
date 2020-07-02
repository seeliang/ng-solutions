import { Component } from '@angular/core';
const columnDefs = [
  {headerName: "Make", field: "make", sortable: true},
  {headerName: "Model", field: "model"},
  {headerName: "Price", field: "price"},
  {headerName: "Stock", field: "stock"},
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
    {make: "BMW", model: "218i", price: 42000},
    {make: "Audi", model: "A3", price: 42000}
  ]
}

const joinStock = ({stock, data }) => {
  const {rowData} = data;
  const joinedRowdata = rowData.map( i => ({
    ...i, 
    stock: stock[i.model]})
  );
  return {...data, rowData: joinedRowdata}
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ag-grid';
    public tableData: object;
    private fakeStockApi: object;

    constructor() {
      this.tableData = {};
      this.fakeStockApi = {};
    }

    ngOnInit() {
      this.fakeStockApi = { // get value from api
        Celica: 1,
        Mondeo: 3,
        Boxter: 1,
        A180: 3,
        '218i': 4,
        A3: 2,
      },
      this.tableData= joinStock({data:sampleA, stock: this.fakeStockApi})
    }
    onLoadA() {
      this.tableData= joinStock({data:sampleA, stock: this.fakeStockApi})
    }
    onLoadB() {
      this.tableData= joinStock({data:sampleB, stock: this.fakeStockApi})
    }
}
