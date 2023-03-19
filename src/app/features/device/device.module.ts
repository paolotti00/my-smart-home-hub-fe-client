import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponentLightDetailPageComponent } from './pages/device-component-detail-light/device-component-light-detail.page.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {deviceRoutingModule} from "./device.routing.module";
import {DeviceDetailPageComponent} from "./pages/device-detail/device-detail.page.component";
import { DeviceComponentLightActionComponent } from './components/device-component-light-action/device-component-light-action.component';
import {DeviceMainPageComponent} from "./pages/device/device.main.page.component";
import {
  DeviceComponentLightColorComponent
} from "./components/device-component-light-color/device-component-light-color.component";
import {DeviceComponentComponent} from "./components/device-component/device-component.component";
import {DeviceItemComponent} from "./components/device-item/device-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    DeviceMainPageComponent,
    DeviceComponentLightDetailPageComponent,
    DeviceDetailPageComponent,
    DeviceComponentComponent,
    DeviceItemComponent,
    DeviceComponentLightActionComponent,
    DeviceComponentLightColorComponent
  ],
  exports:[
    DeviceItemComponent
  ],
    imports: [
        RouterModule.forChild(deviceRoutingModule),
        SharedModule,
        CommonModule,
        FontAwesomeModule
    ]
})
export class DeviceModule { }
