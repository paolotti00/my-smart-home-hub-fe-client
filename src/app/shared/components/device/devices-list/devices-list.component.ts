import {Component, Input} from '@angular/core';
import {UserModel} from "../../../../core/models/user.model";
import {DeviceModel} from "../../../../core/models/device.model";
import {ComponentWrapperModel} from "../../../../core/models/componentWrapper.model";

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent {
  @Input()
  devices : DeviceModel[]=[]

  getNColSpan(components:ComponentWrapperModel){
    let nColSpan=1
    if (components.componentsList.length>1){
      nColSpan=2;
    }
    return nColSpan
  }
}
