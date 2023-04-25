import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileGuard } from './guards/ProfileGaurdService.service';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'home', component: HomeComponent, canActivate:[ProfileGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProfileGuard]
})
export class AppRoutingModule { }
