import { Component, Input } from '@angular/core';
import {GridOptions, Module, AllCommunityModules} from "@ag-grid-community/all-modules";
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
        this.gridOptions = this.tableData;
    }

    readData() {
        const { rowData } = this.tableData;
        this.gridApi.setRowData(rowData)
    }
}