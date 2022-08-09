import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReturnManagerListComponent} from "./return-manager-list/return-manager-list.component";
import {ReturnManagerRoutingModule} from "./return-manager-routing.module";


@NgModule({
  declarations: [
    ReturnManagerListComponent
  ],

  imports: [
    CommonModule,
    ReturnManagerRoutingModule,
  ]
})

export class ReturnManagerModule { }
