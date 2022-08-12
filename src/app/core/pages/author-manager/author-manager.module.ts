import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthorManagerListComponent} from "./author-manager-list/author-manager-list.component";
import {AuthorManagerRoutingModule} from "./author-manager-routing.module";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthorManagerListComponent
  ],

  imports: [
    CommonModule,
    AuthorManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ]
})

export class AuthorManagerModule { }
