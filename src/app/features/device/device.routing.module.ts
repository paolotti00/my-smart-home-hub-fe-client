import {Routes} from "@angular/router";
import {
  DeviceComponentLightDetailPageComponent
} from "./pages/device-component-detail-light/device-component-light-detail.page.component";
import {deviceRoutesName} from "../../core/constants/routes.names.constant";
import {DeviceDetailPageComponent} from "./pages/device-detail/device-detail.page.component";
import {DeviceMainPageComponent} from "./pages/device/device.main.page.component";

export const deviceRoutingModule: Routes = [
  {
    path: "",
    component: DeviceMainPageComponent,
    children: [
      {
        path: deviceRoutesName.DEVICE_DETAIL,
        component: DeviceDetailPageComponent,
        data: {
          authorities: ['', '', ''],
          pageTitle: 'component detail'
        },
        canActivate: []
      },
      {
        path: deviceRoutesName.DEVICE_COMPONENT_LIGHT_DETAILS,
        component: DeviceComponentLightDetailPageComponent,
        data: {
          authorities: ['', '', ''],
          pageTitle: 'component detail'
        },
        canActivate: []
      }]
  }
]
