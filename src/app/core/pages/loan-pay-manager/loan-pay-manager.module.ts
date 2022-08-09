import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LoanPayManagerListComponent} from "./loan-pay-manager-list/loan-pay-manager-list.component";
import {LoanPayManagerRoutingModule} from "./loan-pay-manager-routing.module";


@NgModule({
  declarations: [
    LoanPayManagerListComponent
  ],

  imports: [
    CommonModule,
    LoanPayManagerRoutingModule,

  ]
})

export class LoanPayManagerModule { }
