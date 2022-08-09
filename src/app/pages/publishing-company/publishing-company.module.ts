import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PublishingCompanyListComponent} from "./publishing-company-list/publishing-company-list.component";
import {PublishingCompanyRoutingModule} from "./publishing-company-routing.module";


@NgModule({
  declarations: [
    PublishingCompanyListComponent
  ],

  imports: [
    CommonModule,
    PublishingCompanyRoutingModule,

  ]
})

export class PublishingCompanyModule { }
