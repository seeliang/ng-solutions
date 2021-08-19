import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent implements OnInit {
  constructor(public router:Router
  ) { 
  }

  ngOnInit() {

  }
}
