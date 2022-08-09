import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {RegisterComponent} from "./register/register.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {LoginComponent} from "./login/login.component";

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
