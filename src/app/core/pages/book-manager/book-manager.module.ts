import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BookManagerListComponent} from "./book-manager-list/book-manager-list.component";
import {BookManagerRoutingModule} from "./book-manager-routing.module";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    BookManagerListComponent
  ],

  imports: [
    CommonModule,
    BookManagerRoutingModule,
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

export class AuthorManagerModule { }
