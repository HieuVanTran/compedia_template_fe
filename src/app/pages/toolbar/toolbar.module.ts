import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ChangePasswordComponent} from "../../change-password/change-password.component";

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})

export class ToolbarModule {}
