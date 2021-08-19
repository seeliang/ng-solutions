import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const pushUrl = (href) => {
  history.pushState({}, '', href);
  window.dispatchEvent(new Event('popstate'));
};

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})


export class NotFoundComponent implements OnInit {
  public link: string
  constructor(private router: Router
  ) { 
    router.events.subscribe((val) => {
      this.setLink();
  });

  }

  setLink() {
    this.link = Math.random().toString();
  }

  ngOnInit() {

    this.setLink();
    window.addEventListener('popstate', pushUrl);

  }
  ngOnDestroy() {
    console.log('leave 404')
  }
}
