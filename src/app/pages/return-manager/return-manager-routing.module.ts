import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReturnManagerListComponent} from "./return-manager-list/return-manager-list.component";


const routes: Routes = [
  {
    path: '',
    component: ReturnManagerListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReturnManagerRoutingModule { }
