import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  LoginForm = new FormGroup({
    Email: new FormControl('Kiyan@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    Password: new FormControl('Greatt', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(this.LoginForm.value);
  }
  get Email() {
    return this.LoginForm.get('Email');
  }
  get Password() {
    return this.LoginForm.get('Password');
  }
}
