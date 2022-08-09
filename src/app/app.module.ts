import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
    ChangePasswordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
