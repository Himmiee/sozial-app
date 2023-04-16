import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  constructor() {}

  ResetPasswordForm = new FormGroup({
    Password: new FormControl('Greatt', [
      Validators.required,
      Validators.minLength(6),
    ]),
    ConfirmPassword: new FormControl('Greatt', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(this.ResetPasswordForm.value);
  }

  get Password() {
    return this.ResetPasswordForm.get('Password');
  }
  get ConfirmPassword() {
    return this.ResetPasswordForm.get('ConfirmPassword');
  }
  get f () {
    return this.ResetPasswordForm.controls
   
  }

}
