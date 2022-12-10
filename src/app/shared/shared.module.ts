import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomItemComponent
  ],
  exports: [
    RoomsListComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class SharedModule { }
