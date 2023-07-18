import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
});

  nameControl = new FormControl('');
  emailControl = new FormControl('');
  phoneControl = new FormControl('');


export class FormularioComponent {
  LoginModel: FormGroup = new FormGroup({
   
    name: this.nameControl,
    email: this.emailControl,
    phone: this.phoneControl

  });
  

  // constructor(private formBuilder: FormBuilder){
  //   this.LoginModel = this formBuilder.group({
  //     name: [''],
  //     email: [''],
  //     phone: [''],
      
  //   });

  }
