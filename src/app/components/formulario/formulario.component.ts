import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  LoginModel={
    email: "",
    password: "",
    checkbox: "",


  }
email: any;

}
