import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./core/pages/pages.component";


const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./core/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'pages',
    component: PagesComponent,
    loadChildren: () => import('./core/pages/pages.module').then(module => module.PagesModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

