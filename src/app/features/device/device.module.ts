import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponentDetailPageComponent } from './pages/device-component-detail/device-component-detail.page.component';
import {
  DeviceComponentLightDetailComponent
} from "./components/device-component-light-detail/device-component-light-detail.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {deviceRoutingModule} from "./device.routing.module";



@NgModule({
  declarations: [
    DeviceComponentDetailPageComponent,
    DeviceComponentLightDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(deviceRoutingModule)
  ]
})
export class DeviceModule { }
