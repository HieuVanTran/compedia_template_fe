import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DelinquentManagerListComponent} from "./delinquent-manager-list/delinquent-manager-list.component";
import {DelinquentManagerRoutingModule} from "./delinquent-manager-routing.module";

@NgModule({
  declarations: [
    DelinquentManagerListComponent
  ],

  imports: [
    CommonModule,
    DelinquentManagerRoutingModule,

  ]
})

export class DelinquentManagerModule { }
