import { Component } from '@angular/core';

// api data 
const colSet = [
  {headerName: "Make", field: "make", sortable: true},
  {headerName: "Model", field: "model"},
  {headerName: "Price", field: "price"},
  {headerName: "Stock", field: "stock"},
];

const rowDataSampleA =  [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
]

const rowDataSampleB =  [
  {make: "Mercedes", model: "A180", price: 45000},
  {make: "BMW", model: "218i", price: 42000},
  {make: "Audi", model: "A3", price: 42000}
]

const stock = { 
  Celica: 1,
  Mondeo: 3,
  Boxter: 1,
  A180: 3,
  '218i': 4,
  A3: 2,
};

// pure functions
const joinStock = ({stock, data }) => data.map( i => ({
  ...i, 
  stock: stock[i.model]})
);

const generateTableData = ({rowData, columnDefs, stock}) => ({
  columnDefs,
  rowData: joinStock({data: rowData, stock})
})

const loadStockChange = ({stock, prev}) => {
  const {columnDefs, rowData} = prev
  return generateTableData({rowData: rowData, columnDefs, stock})
}

const fakeApiUpdate= ({prev,model,type}) => { // simulate redux: call api and load api data from ngOnChanges
  const update = { [model]: prev[model]}
  if (type === 'plus') {
    update[model]++
  }
  if (type === 'minus' && update[model] > 0) {
    update[model]--
  }
  return {...prev, ...update};
}

// angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { // container: data layer, hooking with redux 
    public tableData: object;
    private stockApi: object; // updating data

    constructor() {
      this.tableData = {};
      this.stockApi = {};
    }

    ngOnInit() {
      // get value from api
      this.stockApi = stock 
      this.tableData= generateTableData({rowData:rowDataSampleA, columnDefs: colSet, stock: this.stockApi});
    }
    onLoadA() {
      this.tableData= generateTableData({rowData:rowDataSampleA, columnDefs: colSet, stock: this.stockApi})
    }
    onLoadB() {
      this.tableData= generateTableData({rowData:rowDataSampleB, columnDefs: colSet, stock: this.stockApi})
    }
  
    stockCall(data) { 
      this.callReduxActionAndTriggerNgOnChanges(data)
    }

    callReduxActionAndTriggerNgOnChanges({type, model}) {
      // simulate ngOnchanges when redux return data
      this.stockApi = fakeApiUpdate({prev:this.stockApi, type, model});
      this.tableData = loadStockChange({prev:this.tableData, stock: this.stockApi})
    }
}
