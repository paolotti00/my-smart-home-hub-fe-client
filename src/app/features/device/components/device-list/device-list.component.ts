import {Component, Input} from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent {
  @Input()
  devices: DeviceModel[] = [];
  colSpan = 1

  getColSpan(device: DeviceModel) {
    let colSpan = 1
    if (((device.sensors != undefined && device.sensors.length > 2) || (device.leds != undefined && device.leds.size > 2))
    ) {
      colSpan = 3
    } else  if (((device.sensors != undefined && device.sensors.length > 1) || (device.leds != undefined && device.leds.size > 1))
    ) {
      colSpan = 2
    } else if ((device.sensors != undefined && device.sensors.length == 1) && (device.leds != undefined)){
      colSpan = 2
    }
    return colSpan;
  }
}
