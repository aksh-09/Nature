import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private userDataService:UserDataService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userDataService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/login']); //if not authenticated then it will be redirected to login page
      return false;
    }
  }
}
