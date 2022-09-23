import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DelinquentManagerListComponent} from "./delinquent-manager-list/delinquent-manager-list.component";
import {DelinquentManagerRoutingModule} from "./delinquent-manager-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {TableModule} from "primeng/table";
import {SkeletonModule} from "primeng/skeleton";
import {SkeletonCustomModule} from "../../../util/skeleton/skeleton-custom.module";

@NgModule({
  declarations: [
    DelinquentManagerListComponent
  ],

  imports: [
    CommonModule,
    DelinquentManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    TableModule,
    SkeletonModule,
    SkeletonCustomModule
  ],
  providers:[
    MessageService
  ]
})

export class DelinquentManagerModule { }
