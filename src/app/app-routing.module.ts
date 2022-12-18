import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {dashboardRoutesNames, deviceRoutesName} from "./core/constants/routes.names.constant";

const routes: Routes = [
  {
    path:dashboardRoutesNames.DASHBOARD_BASE_URL,
    loadChildren: () => import('../app/features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:deviceRoutesName.DEVICE_BASE_URL,
    loadChildren: () => import('../app/features/device/device.module').then(m => m.DeviceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
