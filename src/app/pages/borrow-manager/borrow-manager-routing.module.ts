import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BorrowManagerListComponent} from "./borrow-manager-list/borrow-manager-list.component";

const routes: Routes = [
  {
    path: '',
    component: BorrowManagerListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BorrowManagerRoutingModule { }
