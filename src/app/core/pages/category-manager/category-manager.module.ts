import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoryManagerListComponent} from "./category-manager-list/category-manager-list.component";
import {CategoryManagerRoutingModule} from "./category-manager-routing.module";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    CategoryManagerListComponent
  ],

  imports: [
    CommonModule,
    CategoryManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    TableModule
  ],
  providers: [
    FormBuilder,
    MessageService
  ]
})

export class CategoryManagerModule { }
