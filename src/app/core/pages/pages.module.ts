import {NgModule} from "@angular/core";
import {PagesRoutingModule} from "./pages-routing.module";

import {BookManagerComponent} from "./book-manager/book-manager.component";
import { PagesComponent } from "./pages.component";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        BookManagerComponent,
        PagesComponent,

    ],
    imports: [
        PagesRoutingModule,
        ToolbarModule,
        CommonModule,
    ]
})
export class PagesModule {
}
