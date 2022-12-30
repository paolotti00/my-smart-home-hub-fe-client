import {Component, HostBinding, Input} from '@angular/core';
import {DeviceModel} from "../../../../core/models/device.model";

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
      + ' ' + 'bg-lime-100' // backgourd color
      + ' ' + 'h-fit' // height
      + ' ' + 'p-2'; // padding
  }
}
