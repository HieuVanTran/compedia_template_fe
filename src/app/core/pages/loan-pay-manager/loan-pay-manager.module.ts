import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LoanPayManagerListComponent} from "./loan-pay-manager-list/loan-pay-manager-list.component";
import {LoanPayManagerRoutingModule} from "./loan-pay-manager-routing.module";
import {FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";


@NgModule({
  declarations: [
    LoanPayManagerListComponent
  ],

  imports: [
    CommonModule,
    LoanPayManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule

  ],
  providers:   [
    FormBuilder,
    MessageService
  ]

})

export class LoanPayManagerModule { }
