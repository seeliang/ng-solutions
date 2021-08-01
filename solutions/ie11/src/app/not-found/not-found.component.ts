import { Component, OnInit } from '@angular/core';


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
  constructor(
  ) { 

  }

  ngOnInit() {

    this.link = Math.random().toString();
    window.addEventListener('popstate', pushUrl);

  }
  ngOnDestroy() {
    console.log('leave 404')
  }
}
