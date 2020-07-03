import { Component } from '@angular/core';
const staticCol = [
  {headerName: "Make", field: "make", sortable: true},
  {headerName: "Model", field: "model"},
  {headerName: "Price", field: "price"},
  {headerName: "Stock", field: "stock"},
];

const sampleA =  [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
]

const sampleB =  [
  {make: "Mercedes", model: "A180", price: 45000},
  {make: "BMW", model: "218i", price: 42000},
  {make: "Audi", model: "A3", price: 42000}
]

const joinStock = ({stock, data }) => data.map( i => ({
  ...i, 
  stock: stock[i.model]})
);

const getData = ({rowDataStatic, columnDefs, stock}) => ({
  columnDefs,
  rowData: joinStock({data: rowDataStatic, stock})
})

const loadStockChange = ({stock, prev}) => {
  const {columnDefs, rowData} = prev
  return getData({rowDataStatic: rowData, columnDefs, stock})
}
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
      this.tableData= getData({rowDataStatic:sampleA, columnDefs: staticCol, stock: this.fakeStockApi});
    }
    onLoadA() {
      this.tableData= getData({rowDataStatic:sampleA, columnDefs: staticCol, stock: this.fakeStockApi})
    }
    onLoadB() {
      this.tableData= getData({rowDataStatic:sampleB, columnDefs: staticCol, stock: this.fakeStockApi})
    }
    stockCall({type, model}) {
      const update = { [model]: this.fakeStockApi[model]}
      if (type === 'plus') {
        update[model]++
      }
      if (type === 'minus' && update[model] > 0) {
        update[model]--
      }
      this.fakeStockApi = {...this.fakeStockApi, ...update};
      this.loadStockChange();
    }

    loadStockChange() {
      this.tableData = loadStockChange({prev:this.tableData, stock: this.fakeStockApi})
    }
}
