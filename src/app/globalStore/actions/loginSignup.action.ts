import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNIN = '[Auth] Sign Success',
  SIGNIN_SUCCESS = '[Auth] SignIn Success',
  SIGNIN_FAILURE = '[Auth] SignIn Failure',
  LOGOUT= '[Auth] Logout',
  RESETPASSWORD= '[Password] Reset',
  PASSWORDFAILURE= '[Password] Failure',
  PASSWORDSUCCESS = '[Password] Success'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) {}
}


export class SignIn implements Action {
  readonly type = AuthActionTypes.SIGNIN;
  constructor(public payload: any) {}
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SIGNIN_FAILURE;
  constructor(public payload: any) {}
}
  

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SIGNIN_SUCCESS;
  constructor(public payload: any) {}
}


export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() {}
}

export class PasswordReset implements Action {
  readonly type = AuthActionTypes.RESETPASSWORD;
  constructor(public payload: any) {}
}

export class PasswordResetSuccess implements Action {
  readonly type = AuthActionTypes.PASSWORDSUCCESS;
  constructor(public payload: any) {}
}

export class PasswordResetFailure implements Action {
  readonly type = AuthActionTypes.PASSWORDFAILURE;
  constructor(public payload: any) {}
}


  export type All = 
        | LogIn
        | LogInSuccess
        | LogInFailure
        | SignIn
        | SignInSuccess
        | SignInFailure
        | PasswordReset
        | PasswordResetSuccess
        | PasswordResetFailure
        | LogOut