import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoryManagerListComponent} from "./category-manager-list/category-manager-list.component";
import {CategoryManagerRoutingModule} from "./category-manager-routing.module";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CategoryManagerListComponent
  ],

  imports: [
    CommonModule,
    CategoryManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
  ]
})

export class CategoryManagerModule { }
