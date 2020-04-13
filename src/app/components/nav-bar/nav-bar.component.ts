import { Component, OnInit } from '@angular/core';

const url = '../assets/images/th2.jpg';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return `url(${url})`;
  }

}
