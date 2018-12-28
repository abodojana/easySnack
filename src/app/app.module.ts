import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBouffesComponent } from './menu-bouffes/menu-bouffes.component';
import { BouffeComponent } from './bouffe/bouffe.component';
import { PainComponent } from './pain/pain.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuBouffesComponent,
    BouffeComponent,
    PainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
