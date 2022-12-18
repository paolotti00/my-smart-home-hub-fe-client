import {Routes} from "@angular/router";
import {
  DeviceComponentDetailPageComponent
} from "./pages/device-component-detail/device-component-detail.page.component";
import {deviceRoutesName} from "../../core/constants/routes.names.constant";

export const deviceRoutingModule: Routes = [
  {
    path: deviceRoutesName.DEVICE_COMPONENT_LIGHT_DETAILS,
    component: DeviceComponentDetailPageComponent,
    data: {
      authorities: ['', '', ''],
      pageTitle: 'component detail'
    },
    canActivate: []
  },
]
