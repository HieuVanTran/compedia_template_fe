import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

import { UserManagerListComponent } from './user-manager-list/user-manager-list.component';
import { UserManagerRoutingModule } from "./user-manager-routing.module";

@NgModule({
  declarations:  [
    UserManagerListComponent,
  ],

  imports: [
    CommonModule,
    UserManagerRoutingModule,
    ReactiveFormsModule,
    ToastModule,



  ],

  providers: [
    MessageService
  ]
})

export class UserManagerModule{ }