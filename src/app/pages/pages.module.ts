import {NgModule} from "@angular/core";
import {PagesRoutingModule} from "./pages-routing.module";

import {BookManagerComponent} from "./book-manager/book-manager.component";
import { PagesComponent } from "./pages.component";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {CommonModule} from "@angular/common";
import { BorrowManagerListComponent } from './borrow-manager/borrow-manager-list/borrow-manager-list.component';
import { CategoryManagerListComponent } from './category-manager/category-manager-list/category-manager-list.component';
import { ChartListComponent } from './chart/chart-list/chart-list.component';
import { DelinquentManagerListComponent } from './delinquent-manager/delinquent-manager-list/delinquent-manager-list.component';
import { PublishingCompanyListComponent } from './publishing-company/publishing-company-list/publishing-company-list.component';
import { ReturnManagerListComponent } from './return-manager/return-manager-list/return-manager-list.component';

@NgModule({
    declarations: [
        BookManagerComponent,
        PagesComponent,
        // BorrowManagerListComponent,
        // CategoryManagerListComponent,
        // ChartListComponent,
        // DelinquentManagerListComponent,
        // PublishingCompanyListComponent,
        // ReturnManagerListComponent,
    ],
    imports: [
        PagesRoutingModule,
        ToolbarModule,
        CommonModule,
    ]
})
export class PagesModule {
}
