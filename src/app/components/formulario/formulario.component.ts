import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {
  LoginModel: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.LoginModel = this formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      
    });

  }

}




