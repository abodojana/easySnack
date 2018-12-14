import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { PainModel } from '../models/pain.model';

@Component({
  selector: 'es-pain',
  templateUrl: './pain.component.html',
  styleUrls: ['./pain.component.css']
})
export class PainComponent implements OnInit {

  @Input() painModel: PainModel;
  @Output() painClicked = new EventEmitter<PainModel>();
  constructor() { }

  ngOnInit() {
  }

  getPainImageUrl() {
    return `assets/images/pain-${this.painModel.name.toLowerCase()}.jpg`;
  }

  clicked() {
    this.painClicked.emit(this.painModel);
  }

}
