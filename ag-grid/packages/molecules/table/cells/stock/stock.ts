import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "@ag-grid-community/angular";

// TODO: should use scss and html 
@Component({
    selector: 'm-cell-stock',
    templateUrl: './stock.html',
    styleUrls: ['./stock.scss']
})

export class CellStock implements ICellRendererAngularComp {
    private params: any;
    public cell: any;

    agInit(params: any): void {
        this.params = params;
        this.cell = {value: params.value, model: params.data.model};
    }

    public clicked(type): void {
        const {model} = this.cell
        this.params.actions({type,model});
    }

    refresh(): boolean {
        return false;
    }
}

