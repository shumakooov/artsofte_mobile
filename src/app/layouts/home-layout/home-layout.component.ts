import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <router-outlet></router-outlet>
    <app-navigation></app-navigation>
  `,
  styles: []
})
export class HomeLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
