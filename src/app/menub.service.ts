import { Injectable } from '@angular/core';
import { BouffeModel } from './models/bouffe.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenubService {

  constructor() { }

  list(): Observable<Array<BouffeModel>> {
    return of([
      { id: 1, name: 'Sandwich', description: 'blablabla',
        pains: [
          {id: 1, name: 'blanc', description: 'pain normal blanc'},
          {id: 1, name: 'gris', description: 'pain  gris'}
        ]
      },
      { id: 2, name: 'Durum', description: 'Durum', pains: [
        {id: 1, name: 'blanc', description: 'pain normal blanc'},
      {id: 1, name: 'gris', description: 'pain  gris'}] }
    ]).pipe(delay(1000));
  }
}
