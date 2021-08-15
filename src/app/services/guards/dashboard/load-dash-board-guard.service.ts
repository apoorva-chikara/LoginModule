/**
 * Angular imports 
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

/**
 * Third-part imports
 */
 import { ToastrService } from 'ngx-toastr';

/**
 * User imports
 */
import { AuthService } from "../../../entry-point/services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class LoadDashBoardGuard implements CanActivate{

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _toast: ToastrService
  ) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

      if (this._authService.getToken()) {
          return true;
      } else {
        this._toast.error('Please Login/Signup to access the Dashboard');
        this._router.navigate(['/'])
        return false;
      }
    
  }
}
