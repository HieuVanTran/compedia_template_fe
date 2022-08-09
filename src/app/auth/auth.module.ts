import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule {}
