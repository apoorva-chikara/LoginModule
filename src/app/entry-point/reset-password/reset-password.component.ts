import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { PasswordReset } from 'src/app/globalStore/actions/loginSignup.action';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public error: string = '';
  constructor(
    private _store: Store
  ) { }

  public password = {newPassword: '', confirmPassword: '', email: ''};

  ngOnInit(): void {
  }

  onSubmit() : void {
      if (this.password.confirmPassword !== this.password.newPassword) {
          this.error = "Password Doesn't match"
          return
      }
      this._store.dispatch(new PasswordReset(this.password));
  }
}
