import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public massive: string[]
  constructor(
  ) { 
    this.massive = [];
    for (let i = 0; i < 4000; i++) {
      this.massive = [...this.massive, 'hit']
    }
  }
  ngOnInit() {
    console.log(this.massive)
  }
  ngOnDestroy() {
    console.log('leave 404')
  }
}
