import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormControlName,
} from '@angular/forms';
import { IRegister } from '../Models/login.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthService) {}
  registerForm = new IRegister('kiyan', 'Greatt','kiyan@gmail.com','22/02/02','Male','123456');

  ngOnInit(): void {}
  onSubmit( Form: NgForm): void {
    console.log(Form.value);
    this.authService.register(Form.value).subscribe((data:any) =>{
      if(data){
        console.log(data.message);
      } else {
        console.log(data,"J");
        // console.log(data.success)
      }
    })
  }

}
