import { Component } from '@angular/core';
import {faKitchenSet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {
  faKitchenSet=faKitchenSet;
}
