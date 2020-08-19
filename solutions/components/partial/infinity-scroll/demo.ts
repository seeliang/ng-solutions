import { Component } from '@angular/core';

@Component({
  selector: 'infinity-scroll-demo',
  templateUrl: './demo.html',
})

export class InfinityScrollDemo {
    constructor() {
        this.blocks = [{
            title: 1
        }];
        this.index = 1;
    }
  loading() {
      this.index += 1
      this.blocks.push({title: this.index})
  }
}