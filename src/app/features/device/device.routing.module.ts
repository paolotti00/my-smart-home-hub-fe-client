import {Routes} from "@angular/router";
import {
  DeviceComponentLightDetailPageComponent
} from "./pages/device-component-detail/device-component-light-detail.page.component";
import {deviceRoutesName} from "../../core/constants/routes.names.constant";
import {DeviceDetailPageComponent} from "./pages/device-detail/device-detail.page.component";

export const deviceRoutingModule: Routes = [
  {
    path:deviceRoutesName.DEVICE_BASE_URL,
    component: DeviceDetailPageComponent,
    children:[{
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
