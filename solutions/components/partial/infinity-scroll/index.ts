import { Component, Input, Output, EventEmitter,ViewChild } from '@angular/core';

@Component({
  selector: 'infinity-scroll',
  templateUrl: './index.html',
})

export class InfinityScroll {
  @Input()
  itemList = [];

  @Output()
  reachBottom = new EventEmitter<any>();


  @ViewChild('loading') 
  loading;

  ngAfterViewInit() {
    const loading = this.loading.nativeElement;
    const observer = new IntersectionObserver(this.observing);
    observer.observe(loading);
  }

  observing(entries) {
    if(entries[0].isIntersecting) {
      this.reachBottom? this.reachBottom() : null;
    }
  }
}