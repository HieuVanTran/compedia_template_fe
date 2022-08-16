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
    path: 'staff-manager',
    loadChildren: () => import('./staff-manager/staff-manager.module').then(module => module.StaffManagerModule)
  },
  {
    path: 'author-manager',
    loadChildren: () => import('./author-manager/author-manager.module').then(module => module.AuthorManagerModule)
  },
  {
    path: 'loan-pay-manager',
    loadChildren: () => import('./loan-pay-manager/loan-pay-manager.module').then(module => module.LoanPayManagerModule)
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
  },
  {
    path: 'role-manager',
    loadChildren: () => import('./role-manager/role-manager.module').then(module => module.RoleManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutingModule)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
