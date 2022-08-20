import {NgModule} from "@angular/core";
import {PagesRoutingModule} from "./pages-routing.module";


import { PagesComponent } from "./pages.component";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ChartListComponent} from "./chart/chart-list.component";
import {ChartModule} from 'primeng/chart';



@NgModule({
    declarations: [
        ChartListComponent,
        PagesComponent,

    ],
    imports: [
      PagesRoutingModule,
      ToolbarModule,
      CommonModule,
      ChartModule,
      FormsModule,
      ReactiveFormsModule,
      ToastModule
    ],
    providers: [
      MessageService
    ]
})
export class PagesModule {
}
