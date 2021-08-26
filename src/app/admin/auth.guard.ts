import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../model/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    if(!this.authService.authenticated) {
      this.router.navigateByUrl('/admin/auth');

    }
    return true;
  }
}
