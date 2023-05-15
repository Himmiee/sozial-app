import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { navData } from './Models/navdata';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sozial-app';
  showNav = true;
  
  faSignInAlt = faSignInAlt

  navData = navData
  constructor(private authService: AuthService, private router: Router){
    router.events.subscribe(
      (val) => {
        if (val instanceof NavigationEnd){
          if (val.url == "/" || val.url == "/register" || val.url =="/forgotPassword" || val.url == "/resetPassword"){
                this.showNav = false;
          }
        }
      }
    )
  }

  logout(){
    this.authService.logout();
    
  }
 
}
