import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
