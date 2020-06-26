import { Component, Input } from '@angular/core';
@Component({
    selector: 'm-table',
    templateUrl: './table.html',
  })

export class Table {
    @Input() 
    tableData

    public rowData:any[];
    public columnDefs:any[];

    ngOnInit() {
        this.readData();
    }

    readData() {
        const {columnDefs, rowData} = this.tableData;
        this.columnDefs = columnDefs;
        this.rowData = rowData;
    }
}