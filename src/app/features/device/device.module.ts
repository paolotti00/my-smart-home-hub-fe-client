import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponentLightDetailPageComponent } from './pages/device-component-detail/device-component-light-detail.page.component';
import {
  DeviceComponentLightDetailComponent
} from "./components/device-component-light-detail/device-component-light-detail.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {deviceRoutingModule} from "./device.routing.module";
import {DeviceDetailPageComponent} from "./pages/device-detail/device-detail.page.component";



@NgModule({
  declarations: [
    DeviceComponentLightDetailPageComponent,
    DeviceComponentLightDetailComponent,
    DeviceDetailPageComponent
  ],
  imports: [
    RouterModule.forChild(deviceRoutingModule),
    SharedModule,
    CommonModule
  ]
})
export class DeviceModule { }
