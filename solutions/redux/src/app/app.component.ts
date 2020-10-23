import { Component, ChangeDetectorRef } from '@angular/core';

declare global {
  interface Window { store: Store; }
}

interface Dispatch {
  type: string; 
  text: string
}

interface Store {
  getState(): {
    counter: {count: Number}
  };
  subscribe(func:any): any;
  dispatch(data: Dispatch): any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux';
  count = '0';
  message = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit () {
    window.store.subscribe(this.update.bind(this))
  }

  update() {
    this.count= window.store.getState().counter.count.toString();
    this.changeDetectorRef.detectChanges();
  }
  
  onType(e) {
    this.message = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();
    window.store.dispatch({type: 'MESSAGE_UPDATE', text: this.message })
  }
}
