import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';
import { IReset } from '../Models/login.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  constructor() {}
  resetPasswordForm = new IReset('123456','123456');

  ngOnInit(): void {}
  onSubmit(Form: NgForm): void {
    console.log(Form.value);
  }

 

}
