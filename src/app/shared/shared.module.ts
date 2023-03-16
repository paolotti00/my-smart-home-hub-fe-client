import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomsListComponent} from './components/room/rooms-list/rooms-list.component';
import {CardCompactWithIconAndTextComponent} from './components/card-compact-with-icon-and-text/card-compact-with-icon-and-text.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DeviceItemComponent} from './components/device/device-item/device-item.component';
import {DeviceComponentComponent} from './components/device/device-component/device-component.component';
import {NameComponent} from './components/name/name.component';
import {GridListComponent} from './components/grid-list/grid-list.component';
import {ColorPickerModule} from "ngx-color-picker";
import {ColorPickerComponent} from './components/color-picker/color-picker.component';


@NgModule({
  declarations: [
    RoomsListComponent,
    CardCompactWithIconAndTextComponent,
    DeviceItemComponent,
    DeviceComponentComponent,
    NameComponent,
    GridListComponent,
    ColorPickerComponent
  ],
  exports: [
    RoomsListComponent,
    NameComponent,
    GridListComponent,
    DeviceItemComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ColorPickerModule
  ]
})
export class SharedModule {}
