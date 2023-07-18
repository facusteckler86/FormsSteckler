import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
interface LoginModel {

  name: FormControl <string | null>;
  email: FormControl <string | null>;
  phone: FormControl <string | null>
}
export class FormsComponent {

  LoginModel = {

  }
}
