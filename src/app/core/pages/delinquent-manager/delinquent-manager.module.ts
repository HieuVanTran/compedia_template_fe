import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DelinquentManagerListComponent} from "./delinquent-manager-list/delinquent-manager-list.component";
import {DelinquentManagerRoutingModule} from "./delinquent-manager-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DelinquentManagerListComponent
  ],

  imports: [
    CommonModule,
    DelinquentManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class DelinquentManagerModule { }
