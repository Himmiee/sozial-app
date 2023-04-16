import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotPasswordForm = new FormGroup({
 
    Email: new FormControl('Kiyan@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    DOB: new FormControl('02/02/24', [Validators.required]),
  })
  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(this.ForgotPasswordForm.value);
  }

  get Email() {
    return this.ForgotPasswordForm.get('Email');
  }
  get DOB() {
    return this.ForgotPasswordForm.get('DOB');
  }


}
