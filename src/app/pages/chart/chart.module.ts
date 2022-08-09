import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChartListComponent} from "./chart-list/chart-list.component";
import {ChartRoutingModule} from "./chart-routing.module";


@NgModule({
  declarations: [
    ChartListComponent
  ],

  imports: [
    CommonModule,
    ChartRoutingModule,

  ]
})

export class ChartModule { }
