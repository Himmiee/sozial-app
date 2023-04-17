import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';
import { IForgot } from '../Models/login.model';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = new IForgot("kiyan@gmail.com","02/02/20")
  ngOnInit(): void {}
  onSubmit(Form: NgForm): void {
    console.log(Form.value);
  }




}
