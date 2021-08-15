import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Angular core
 */
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';

/**
 * Store imports
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/**
 * Third-party modules
 */
 import { ToastrModule } from 'ngx-toastr';
 import { NgHttpLoaderModule } from 'ng-http-loader';

/**
 * User custom modules
 */
import { EntryPointModule } from "./entry-point/entry-point.module";
import { AuthEffects } from "./globalStore/effects/auth.effects";
import { reducers  } from "./globalStore/app.state";
import { TokenInterceptor } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    ToastrModule.forRoot(),
    EntryPointModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
