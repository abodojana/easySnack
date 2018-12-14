import { Component, OnInit } from '@angular/core';
import { BouffeModel } from '../models/bouffe.model';
import { MenubService } from '../menub.service';

@Component({
  selector: 'es-menu-bouffes',
  templateUrl: './menu-bouffes.component.html',
  styleUrls: ['./menu-bouffes.component.css']
})
export class MenuBouffesComponent implements OnInit {
bouffes: Array<BouffeModel>;
  constructor(private menuBsrv: MenubService) { }

  ngOnInit() {
this.menuBsrv.list().subscribe(bouffes => this.bouffes = bouffes);
  }

}
