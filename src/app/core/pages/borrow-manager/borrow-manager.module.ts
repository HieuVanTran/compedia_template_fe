import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BorrowManagerRoutingModule} from "./borrow-manager-routing.module";
import {BorrowManagerListComponent} from "./borrow-manager-list/borrow-manager-list.component";


@NgModule({
  declarations: [
    BorrowManagerListComponent
  ],

  imports: [
    CommonModule,
    BorrowManagerRoutingModule,

  ]
})

export class BorrowManagerModule { }
