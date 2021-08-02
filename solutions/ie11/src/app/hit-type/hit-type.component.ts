import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hit',
  templateUrl: './hit-type.component.html',
  styleUrls: ['./hit-type.component.scss']
})
export class HitTypeComponent implements OnInit {
  public massive: string[]
  constructor(public router:Router
  ) { 
    this.massive = [];
    for (let i = 0; i < 4000; i++) {
      this.massive = [...this.massive, 'hit']
    }
  }

  ngOnInit() {
    console.log(this.massive)
  }
}
