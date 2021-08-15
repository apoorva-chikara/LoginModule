/**
 * Angular Core modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * User components
 */
import { LoginComponent } from './entry-point/login/login.component';
import { ResetPasswordComponent } from './entry-point/reset-password/reset-password.component';
import { SignupComponent } from './entry-point/signup/signup.component';

/**
 * Guards
 */
import { LoadDashBoardGuard } from "./services/guards/dashboard/load-dash-board-guard.service";
import { LoginGuard } from './services/guards/login/login-guard.service';

const routes: Routes = [
      {
        path: '', component: LoginComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'signup', component: SignupComponent
      },
      {
        path: 'resetpassword', component: ResetPasswordComponent
      },
      {
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [LoadDashBoardGuard]
      },
      {
        path: '**', redirectTo: '/' 
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoadDashBoardGuard]
})
export class AppRoutingModule { }
