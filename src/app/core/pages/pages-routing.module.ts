import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChartListComponent} from "./chart/chart-list.component";

const pageRoutingModule: Routes = [
  {
    path: 'chart',
    component: ChartListComponent
  },
  {
    path: '',
    redirectTo: 'chart',
    pathMatch: 'full'
  }
  ,
  {
    path: 'book-manager',
    loadChildren: () => import('./book-manager/book-manager.module').then(module => module.AuthorManagerModule)
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
  },
  {
    path: 'user-manager',
    loadChildren: () => import('./user-manager/user-manager.module').then(module => module.UserManagerModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutingModule)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
