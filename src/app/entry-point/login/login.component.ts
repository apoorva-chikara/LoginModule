/**
 * Angular core imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * User custom imports
 */
import { User } from '../model/login.interface';
import { select, Store } from "@ngrx/store";
import { selectAuthState } from "../../globalStore/app.state";

import { LogIn } from '../../globalStore/actions/loginSignup.action';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public getFormValues: Observable<any>;
  public error: string = '';

  constructor(
    private _store: Store
  ) { 
    this.getFormValues = this._store.select(selectAuthState);
  }

  ngOnInit(): void {
  
  this.getFormValues.subscribe((state) => {
    this.user.email = state.user?.email ?? '';
    this.error = state?.errorMessage;
  });

  }

  user: User = new User();

  onSubmit(): void {
    const {email, password} = this.user;

    this._store.dispatch(new LogIn({email, password}));
    this.user = {email: '', password: ''}
  }

}
