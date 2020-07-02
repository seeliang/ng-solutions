import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "@ag-grid-community/angular";

// TODO: should use scss and html 
@Component({
    selector: 'm-stock-cell',
    template: `
        <i style="width: 25px; display:inline-block">{{this.cell.value}}</i>
        <button (click)="clicked('plus')" > + </button>
        <button (click)="clicked('minus')" > - </button>
    `
})

export class StockCell implements ICellRendererAngularComp {
    private params: any;
    public cell: any;

    agInit(params: any): void {
        this.params = params;
        this.cell = {value: params.value, model: params.data.model};
    }

    public clicked(type): void {
        const {model, value} = this.cell
        this.params.actions({type,model,value});
    }

    refresh(): boolean {
        return false;
    }
}

