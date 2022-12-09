import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {dashboardRoutesNames} from "./core/constants/routes.names.constant";

const routes: Routes = [
  {
    path:dashboardRoutesNames.DASHBOARD,
    loadChildren: () => import('../app/features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
