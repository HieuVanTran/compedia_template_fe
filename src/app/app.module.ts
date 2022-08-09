import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }