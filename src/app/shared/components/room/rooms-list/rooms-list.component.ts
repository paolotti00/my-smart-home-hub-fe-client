import { Component } from '@angular/core';
import {faKitchenSet, faDoorClosed  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  faKitchenSet=faKitchenSet;
  faBed=faDoorClosed ;

}
