import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {StaffManagerListComponent} from "./staff-manager-list/staff-manager-list.component";
import {StaffManagerRoutingModule} from "./staff-manager-routing.module";


@NgModule({
  declarations: [
    StaffManagerListComponent
  ],

  imports: [
    CommonModule,
    StaffManagerRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ],

  providers: [
    MessageService
  ]
})

export class StaffManagerModule { }
