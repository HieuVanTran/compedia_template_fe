import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccManagerRoutingModule} from "./acc-manager-routing.module";
import {AccManagerListComponent} from "./acc-manager-list/acc-manager-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {PaginatorModule} from "primeng/paginator";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    AccManagerListComponent
  ],

  imports: [
    CommonModule,
    AccManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    PaginatorModule,
    TableModule,
  ],

  providers: [
    MessageService
  ]
})

export class AccManagerModule { }
