import { Component, Input, Output, EventEmitter,ViewChild } from '@angular/core';

@Component({
  selector: 'infinity-scroll',
  templateUrl: './index.html',
})

export class InfinityScroll {
  @Input()
  itemList = [];
  @Output()
  reachBottom = new EventEmitter().emit();
  @ViewChild('infinityScroll') 
  container;
  @ViewChild('loading') 
  loading;

  ngAfterViewInit() {
    const loading = this.loading.nativeElement;
    const observer = new IntersectionObserver(this.observing);
    observer.observe(loading);
  }

  observing(entries,observer) {
    if(entries[0].isIntersecting) {
      console.log(`loading`)
    }
  }
}