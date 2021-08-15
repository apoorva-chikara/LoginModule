
/**
 * Angular imports 
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute, 
         ActivatedRouteSnapshot, 
         CanActivate, 
         RouterStateSnapshot,
         Router } from "@angular/router";

/**
 * User Imports
 */
import { AuthService } from "../../../entry-point/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (this._authService.getToken()) {
        this._router.navigate(['/dashboard']);
    } else {
        return true;
    }
    
  }
}
