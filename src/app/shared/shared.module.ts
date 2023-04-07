import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardCompactWithIconAndTextComponent} from './components/card-compact-with-icon-and-text/card-compact-with-icon-and-text.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NameComponent} from './components/name/name.component';
import {GridListComponent} from './components/grid-list/grid-list.component';
import {ColorPickerModule} from "ngx-color-picker";
import {ColorPickerComponent} from './components/color-picker/color-picker.component';
import { GridListContainerComponent } from './components/grid-list/grid-list-container/grid-list-container.component';
import { GridListElementComponent } from './components/grid-list/grid-list-element/grid-list-element.component';
import { ChartsLineComponent } from './components/charts-line/charts-line.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    CardCompactWithIconAndTextComponent,
    NameComponent,
    GridListComponent,
    ColorPickerComponent,
    GridListContainerComponent,
    GridListElementComponent,
    ChartsLineComponent
  ],
    exports: [
        NameComponent,
        GridListComponent,
        ColorPickerComponent,
        CardCompactWithIconAndTextComponent,
        GridListContainerComponent,
        GridListElementComponent,
        ChartsLineComponent
    ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ColorPickerModule,
    NgChartsModule
  ]
})
export class SharedModule {}
