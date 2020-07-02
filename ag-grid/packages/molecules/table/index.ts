import { Component, Input } from '@angular/core';
import {GridOptions, Module, AllCommunityModules} from "@ag-grid-community/all-modules";
import {StockCell} from './stock/stock';

const transformStock = ({data, actions}) => {
    const {columnDefs} = data
    const updatedCol = columnDefs.map( i => i.headerName === 'Stock'? 
        {
            ...i, 
            cellRendererFramework: StockCell,
            cellRendererParams:{
                actions: actions
            }
        }
    : i);
    return {...data, columnDefs:updatedCol}
}

@Component({
    selector: 'm-table',
    templateUrl: './table.html',
})

export class Table {
    @Input() 
    tableData

    public gridOptions: GridOptions;
    public modules: Module[] = AllCommunityModules;
    private gridApi;
  
    onGridReady(params) {
      this.gridApi = params.api;
    }

    ngOnInit() {
        this.initData();
    }
    ngOnChanges() {
        this.readData();
    }

    initData() {
        this.gridOptions = transformStock({data:this.tableData, actions:this.stockActions});
    }

    stockActions(data) {
        console.log(data);
    }

    readData() {
        if(!this.gridApi?.setRowData){ // fix life cycle issue
            return;
        }
        const { rowData } = this.tableData;
        this.gridApi.setRowData(rowData)
    }
}