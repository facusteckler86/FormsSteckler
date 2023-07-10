import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBuilder,
    Component,
    FormsModule   
          

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
