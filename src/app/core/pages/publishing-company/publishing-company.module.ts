import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PublishingCompanyListComponent} from "./publishing-company-list/publishing-company-list.component";
import {PublishingCompanyRoutingModule} from "./publishing-company-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    PublishingCompanyListComponent
  ],

  imports: [
    CommonModule,
    PublishingCompanyRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ],

  providers: [
    MessageService
  ]
})

export class PublishingCompanyModule { }
