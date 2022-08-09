import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoryManagerListComponent} from "./category-manager-list/category-manager-list.component";
import {CategoryManagerRoutingModule} from "./category-manager-routing.module";


@NgModule({
  declarations: [
    CategoryManagerListComponent
  ],

  imports: [
    CommonModule,
    CategoryManagerRoutingModule,

  ]
})

export class CategoryManagerModule { }
