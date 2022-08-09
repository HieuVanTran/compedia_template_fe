import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookManagerComponent} from "./book-manager/book-manager.component";

const pageRoutingModule: Routes = [
  {
    path: 'book-manager',
    component: BookManagerComponent
  },
  {
    path: 'acc-manager',
    loadChildren: () => import('./acc-manager/acc-manager.module').then(module => module.AccManagerModule)
  },
  {
    path: 'author-manager',
    loadChildren: () => import('./author-manager/author-manager.module').then(module => module.AuthorManagerModule)
  },
  {
    path: 'borrow-manager',
    loadChildren: () => import('./borrow-manager/borrow-manager.module').then(module => module.BorrowManagerModule)
  },
  {
    path: 'return-manager',
    loadChildren: () => import('./return-manager/return-manager.module').then(module => module.ReturnManagerModule)
  },
  {
    path: 'category-manager',
    loadChildren: () => import('./category-manager/category-manager.module').then(module => module.CategoryManagerModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then(module => module.ChartModule)
  },
  {
    path: 'delinquent-manager',
    loadChildren: () => import('./delinquent-manager/delinquent-manager.module').then(module => module.DelinquentManagerModule)
  },
  {
    path: 'publishing-company',
    loadChildren: () => import('./publishing-company/publishing-company.module').then(module => module.PublishingCompanyModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutingModule)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
