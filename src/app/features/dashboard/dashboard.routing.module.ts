import {Routes} from "@angular/router";
import {dashboardRoutesNames} from "../../core/constants/routes.names.constant";
import {DashboardComponent} from "./dashboard.component";

export const dashboardRoutingModule: Routes = [
  {
    path:dashboardRoutesNames.DASHBOARD_BASE_URL,
    component:DashboardComponent,
    data:{
      authorities:['', '', ''],
      pageTitle:'dashboard'
    },
    canActivate:[]
  },
]
