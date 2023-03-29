import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponentLightDetailPageComponent } from './pages/device-component-detail-light/device-component-light-detail.page.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {deviceRoutingModule} from "./device.routing.module";
import {DeviceDetailPageComponent} from "./pages/device-detail/device-detail.page.component";
import {DeviceMainPageComponent} from "./pages/device-main/device.main.page.component";
import {DeviceItemComponent} from "./components/device-item/device-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {
  DeviceComponentLightActionComponent
} from "./components/device-component/device-component-light/device-component-light-action/device-component-light-action.component";
import {
  DeviceComponentLightColorComponent
} from "./components/device-component/device-component-light/device-component-light-color/device-component-light-color.component";
import { DeviceComponentBaseComponent } from './components/device-component/device-component-base/device-component-base.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DeviceMainPageComponent,
    DeviceComponentLightDetailPageComponent,
    DeviceDetailPageComponent,
    DeviceItemComponent,
    DeviceComponentLightActionComponent,
    DeviceComponentLightColorComponent,
    DeviceComponentBaseComponent
  ],
  exports:[
    DeviceItemComponent
  ],
    imports: [
        RouterModule.forChild(deviceRoutingModule),
        SharedModule,
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
})
export class DeviceModule { }
