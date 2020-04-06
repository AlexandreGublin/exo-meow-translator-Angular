import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../service/LoginService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.userForm = formBuilder.group({
      email: formBuilder.control('test@gmail.com', [
        Validators.required,
        Validators.email,
        Validators.maxLength(30)
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])
    });
  }

  submitForm() {
    console.log('receive form : ' + this.userForm.get('email').value);
    this.userForm.get('email').errors;
    this.userForm.get('password').errors;
    this.loginService.authentication(this.userForm);
  }

}
