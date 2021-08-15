/**
 * Angular core imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Store Imports
 */

import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/internal/Observable';
import { selectAuthState } from 'src/app/globalStore/app.state';
import { SignIn } from "../../globalStore/actions/loginSignup.action";

import { SignUpForm } from "../model/signup.interface";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public getFormValues: Observable<any>;
  public error: string = '';
  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
     this._store.select(selectAuthState).subscribe((state) => {
       this.error = state['errorMessage']
     })
  }

  public user: SignUpForm = new SignUpForm();

  onSubmit(): void {
    console.log(this.user);
    const {fullName, email, password} = this.user;
    this._store.dispatch(new SignIn({fullName, email, password}) )
  }

  reset(): void {
      this.user = { email: '', password: '', fullName: ''};
      this.error = '';
  }

}
