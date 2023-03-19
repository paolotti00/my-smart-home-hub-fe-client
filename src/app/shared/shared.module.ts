import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardCompactWithIconAndTextComponent} from './components/card-compact-with-icon-and-text/card-compact-with-icon-and-text.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NameComponent} from './components/name/name.component';
import {GridListComponent} from './components/grid-list/grid-list.component';
import {ColorPickerModule} from "ngx-color-picker";
import {ColorPickerComponent} from './components/color-picker/color-picker.component';


@NgModule({
  declarations: [
    CardCompactWithIconAndTextComponent,
    NameComponent,
    GridListComponent,
    ColorPickerComponent
  ],
  exports: [
    NameComponent,
    GridListComponent,
    ColorPickerComponent,
    CardCompactWithIconAndTextComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ColorPickerModule
  ]
})
export class SharedModule {}
