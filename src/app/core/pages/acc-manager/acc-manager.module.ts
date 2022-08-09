import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccManagerRoutingModule} from "./acc-manager-routing.module";
import {AccManagerListComponent} from "./acc-manager-list/acc-manager-list.component";


@NgModule({
  declarations: [
    AccManagerListComponent
  ],

  imports: [
    CommonModule,
    AccManagerRoutingModule,

  ]
})

export class AccManagerModule { }
