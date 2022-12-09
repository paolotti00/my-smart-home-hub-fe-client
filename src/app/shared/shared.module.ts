import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';



@NgModule({
  declarations: [
    RoomsListComponent
  ],
  exports: [
    RoomsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
