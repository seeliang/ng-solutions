import { Component, Input,ViewChild } from '@angular/core';

@Component({
  selector: 'infinity-scroll',
  templateUrl: './index.html',
})

export class InfinityScroll {
  @Input()
  public reachBottom:Function;


  @ViewChild('loading') 
  loading;

  ngAfterViewInit() {
    const loading = this.loading.nativeElement;
    const observer = new IntersectionObserver((entries) => this.observing(entries));
    observer.observe(loading);
  }

  observing(entries) {
    if(entries[0].isIntersecting) {
      typeof (this.reachBottom) === 'function'? this.reachBottom() : null;
    }
  }
}