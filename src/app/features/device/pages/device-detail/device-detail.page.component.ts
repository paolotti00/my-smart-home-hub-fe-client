import {Component, Input} from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.page.component.html',
  styleUrls: ['./device-detail.page.component.scss']
})
export class DeviceDetailPageComponent {
  @Input()
  device?:DeviceModel

}
