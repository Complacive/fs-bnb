import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin(localStorage.getItem('isLoggedIn'));
  }

  checkLogin(isLoggedInBoolean: string): boolean {
    if (isLoggedInBoolean === 'false') {
      this.router.navigate(['/login']);
      return false;
    } else if (isLoggedInBoolean === 'true') {
      return true;
    }
  }
}
