import {NgModule} from "@angular/core";
import {PagesRoutingModule} from "./pages-routing.module";

import {BookManagerComponent} from "./book-manager/book-manager.component";
import { PagesComponent } from "./pages.component";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
    declarations: [
        BookManagerComponent,
        PagesComponent,
    ],
    imports: [
      PagesRoutingModule,
      ToolbarModule,
      CommonModule,
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
