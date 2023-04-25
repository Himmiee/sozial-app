import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, LoginRes } from '../Models/login.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router : Router) {}

  loginForm = new ILogin('kiyan@gmail.com', '123456');
  ngOnInit(): void {
    this.onSubmit;
  }
  onSubmit(Form: NgForm): void {
    console.log(Form.value);
    this.authService.login(Form.value).subscribe((res: any) => {
      if (res) {
        localStorage.setItem("token", res.token)
        this.router.navigate(['/home']);
        console.log('yuh');
      } else {
        console.log('you thought',res);


      }
    });
  }
}
