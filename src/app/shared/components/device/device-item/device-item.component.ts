import {Component, HostBinding, Input} from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";
import {RouteCustomService} from "../../../../core/services/route.custom.service";
import {Router} from "@angular/router";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent {
  @Input()
  inListMode: boolean = false; // pass as true if you are using this component inside the device-list component
  @Input()
  device = {} as DeviceModel
  @Input()
  colSpan: number = 1

  @HostBinding('class')
  public get getClasses(): string {
    return 'col-span-' + this.colSpan
      + ' ' + 'bg-white/10' // background color
      + ' ' + 'h-fit' // height
      + ' ' + 'p-2'; // padding
  }

  constructor(private router: Router, private routeCustomService:RouteCustomService, private viewDataSharingService:ViewDataSharingService) {
  }

  goToDetail(){
    let routeTarget = this.routeCustomService.getRouteToDeviceDetail(this.device.id)
    if(routeTarget){
      this.viewDataSharingService.setCurrentDevice(this.device)
      this.router.navigate([routeTarget])
    } else {
      console.warn("routeTarget is undefined")
    }
  }
}
