import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthorManagerListComponent} from "./author-manager-list/author-manager-list.component";
import {AuthorManagerRoutingModule} from "./author-manager-routing.module";


@NgModule({
  declarations: [
    AuthorManagerListComponent
  ],

  imports: [
    CommonModule,
    AuthorManagerRoutingModule,

  ]
})

export class AuthorManagerModule { }
