import { Component, OnInit, Input } from '@angular/core';
import { BouffeModel } from '../models/bouffe.model';

@Component({
  selector: 'es-bouffe',
  templateUrl: './bouffe.component.html',
  styleUrls: ['./bouffe.component.css']
})
export class BouffeComponent implements OnInit {

  @Input() bouffeModel: BouffeModel;
  constructor() { }

  ngOnInit() {
  }

}
