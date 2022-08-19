import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { UserManagerListComponent } from "./user-manager-list/user-manager-list.component";




const routes: Routes = [
  {
    path: '',
    component: UserManagerListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserManagerRoutingModule { }
