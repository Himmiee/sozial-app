import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  RegisterForm = new FormGroup({
    Firstname: new FormControl('Kiyan', Validators.required),
    Lastname: new FormControl('Greatt', Validators.required),
    Email: new FormControl('Kiyan@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    DOB: new FormControl('02/02/24', [Validators.required]),
    Gender: new FormControl('Male', Validators.required),
    Password: new FormControl('Greatt', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(this.RegisterForm.value);
  }
  get Firstname() {
    return this.RegisterForm.get('Firstname');
  }
  get Lastname() {
    return this.RegisterForm.get('Lastname');
  }
  get Email() {
    return this.RegisterForm.get('Email');
  }
  get DOB() {
    return this.RegisterForm.get('DOB');
  }
  get Gender() {
    return this.RegisterForm.get('Gender');
  }
  get Password() {
    return this.RegisterForm.get('Password');
  }
}
