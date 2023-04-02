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
  DeviceComponentLightColorComponent
} from "./components/device-component/device-component-light/device-component-light-color/device-component-light-color.component";
import { DeviceComponentBaseComponent } from './components/device-component/device-component-base/device-component-base.component';
import {ReactiveFormsModule} from "@angular/forms";
import {
  DeviceComponentActionComponent
} from "./components/device-component/device-component-action/device-component-action.component";
import { DeviceListComponent } from './components/device-list/device-list.component';



@NgModule({
  declarations: [
    DeviceMainPageComponent,
    DeviceComponentLightDetailPageComponent,
    DeviceDetailPageComponent,
    DeviceItemComponent,
    DeviceComponentActionComponent,
    DeviceComponentLightColorComponent,
    DeviceComponentBaseComponent,
    DeviceListComponent
  ],
    exports: [
        DeviceItemComponent,
        DeviceListComponent
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
