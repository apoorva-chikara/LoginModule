/**
 * Angular core imports
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http'

/**
 * Rxjs imports 
 */
import { Observable } from 'rxjs';

/**
 *  Interface imports
 */
import { User } from '../model/login.interface';
import { SignUpForm } from '../model/signup.interface';

/**
 * User imports
 */
import { URLs } from "../../../assets/constants/app.url";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = URLs.baseURL;
  private httpClient: HttpClient = new HttpClient(this._http);

  constructor(
    private _http: HttpBackend, 
    private _router:Router
    ) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/user/login`;

    return this.httpClient.post<User>(url, {email, password});
  }

  signUp(email: string, password: string, fullName: string) : Observable<SignUpForm> {
    const url = `${this.BASE_URL}/user/register`;
    return this.httpClient.post<SignUpForm>(url, {email, password, fullName});
  }

  reroute() {
    this._router.navigate(['/login'])
  }

  resetPassword(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/user/resetpassword`;
    return this.httpClient.post(url, {email, password});
  }

}
