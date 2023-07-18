import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/f

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsSteckler';
}

import { Component } from '@angular/core';



@Component({

  selector: 'app-formulario',

  templateUrl: './formulario.component.html',

  styleUrls: ['./formulario.component.css']

})

export class FormularioComponent {

  LoginModel = {

    email: "",

    password: "",

    checkbox: false

  };

}