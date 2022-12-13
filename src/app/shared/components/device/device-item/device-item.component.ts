import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent {
  @Input()
  inListMode:boolean=false; // pass as true if you are using this component inside the device-list component
  @Input()
  colSpan:number=1
  @HostBinding('class')
  public get getClass():string {
    return 'col-span-'+this.colSpan;
  }
}
