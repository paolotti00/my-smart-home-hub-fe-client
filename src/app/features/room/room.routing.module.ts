import {Routes} from "@angular/router";
import {roomRoutesName} from "../../core/constants/routes.names.constant";
import {RoomMainPageComponent} from "./pages/room-main/room-main.page.component";
import {RoomDetailPageComponent} from "./pages/room-detail/room-detail.page.component";
import {RoomMeasurementsPageComponent} from "./pages/room-measurements/room-measurements.page.component";


export const roomRoutingModule: Routes = [
  {
    path: roomRoutesName.ROOM_BASE_URL,
    component: RoomMainPageComponent,
    children: [
      {
        path: roomRoutesName.ROOM_DETAIL,
        component: RoomDetailPageComponent,
        data: {
          authorities: ['', '', ''],
          pageTitle: 'component detail'
        },
        canActivate: []
      },
      {
        path: roomRoutesName.ROOM_MEASUREMENT,
        component: RoomMeasurementsPageComponent,
        data: {
          authorities: ['', '', ''],
          pageTitle: 'component detail'
        },
        canActivate: []
      }]
  }
]
