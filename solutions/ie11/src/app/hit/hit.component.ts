import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent implements OnInit {
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
