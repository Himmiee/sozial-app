import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../Services/auth.service";
import { Router } from "@angular/router";


@Injectable()

export class ProfileGuard implements CanActivate{
    token: string|null = '';
    constructor(private router:Router) {}

    canActivate(route:ActivatedRouteSnapshot):boolean{
        this.token = localStorage.getItem('token');
        if(this.token == " " || this.token == null){
            this.router.navigate(['/']);
            return false
        }
        return true
    }
}