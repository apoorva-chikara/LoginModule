import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';


import {
  AuthActionTypes,
  LogInSuccess, LogInFailure, SignInSuccess, SignInFailure,
  PasswordResetSuccess, PasswordResetFailure
} from '../actions/loginSignup.action';
import { AuthService } from '../../entry-point/services/auth.service';



@Injectable({
    providedIn :'root'
})
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  LogIn$ = createEffect(() => {
        return this.actions.pipe(
           ofType(AuthActionTypes.LOGIN), 
           switchMap(({payload}) => {
              return this.authService.logIn(payload['email'] , payload['password'])
                  .pipe(map((user)=> {
                    return new LogInSuccess({token: user.accessToken, email: user.email});
                  }), 
                     catchError((error) => {
                          return of(new LogInFailure({ error: error.error }));
                     })
                  )
           })
        )
  }, { dispatch: true })

  LogInSucess$ = createEffect(() => {
       return this.actions.pipe(
           ofType(AuthActionTypes.LOGIN_SUCCESS),
           tap((user) => {
               localStorage.setItem('token', user['payload']['token']);
               // navigate to DashBoard
               this.router.navigate(['/dashboard']);
           })
       )
  }, {dispatch : false})


  SignUp$ = createEffect(() => {
    return this.actions.pipe(
       ofType(AuthActionTypes.SIGNIN), 
       switchMap(({payload}) => {
          return this.authService.signUp(payload['email'], payload['password'], payload['fullName'])
              .pipe(map((user)=> {
                   return new SignInSuccess({email: user.email});
              }), 
                 catchError((error) => {
                  console.log(error);
                      return of(new SignInFailure({ error: error.error }));
                 })
              )
       })
    )
}, { dispatch: true })

SiginSuccess$ = createEffect(() => {
      return this.actions.pipe(
        ofType(AuthActionTypes.SIGNIN_SUCCESS),
        tap(({payload}) => {
          this.router.navigate(['/']);
        })
      )
}, {dispatch : false})



Logout$ = createEffect(() => {
      return this.actions.pipe(
          ofType(AuthActionTypes.LOGOUT),
          tap(() => {
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
          })
      )
}, {dispatch: false})

PasswordReset$ = createEffect(() => {
        return this.actions.pipe(
          ofType(AuthActionTypes.RESETPASSWORD),
          switchMap(({payload}) => {
                return this.authService.resetPassword(payload['email'], payload['confirmPassword']).pipe(
                  map((user) => {
                      this.router.navigate(['/']);
                  }, 
                  catchError((err) => {
                    this.router.navigate(['/reset']);
                    return err;
                  })
                  )
                )
          })
        )
}, {dispatch: false})

// PasswordOnSuccess$ = createEffect(() => {
//         return this.actions.pipe(
//           ofType(AuthActionTypes.PASSWORDSUCCESS),
//           tap(() => {
//                 this.router.navigate[('/')]
//           })
//         )
// }, {dispatch: false})

// PasswordpnFailure$ = createEffect(() => {
//   return this.actions.pipe(
//     ofType(AuthActionTypes.PASSWORDFAILURE),
//     tap(() => {
//           this.router.navigate[('/reset')]
//     })
//   )
// }, {dispatch: false})

}