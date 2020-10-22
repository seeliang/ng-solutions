import { Component, ChangeDetectorRef } from '@angular/core';

declare global {
  interface Window { store: Store; }
}

interface Store {
  getState(): {count: Number};
  subscribe(func:any): any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux';
  count = '0';
  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit () {
    window.store.subscribe(this.update.bind(this))
  }

  update() {
    this.count= window.store.getState().count.toString();
    this.changeDetectorRef.detectChanges();
  }
}
