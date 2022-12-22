import {Component, Input} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";

@Component({
  selector: 'app-device-component-detail.page',
  templateUrl: './device-component-light-detail.page.component.html',
  styleUrls: ['./device-component-light-detail.page.component.scss']
})
export class DeviceComponentLightDetailPageComponent {
  @Input()
  deviceComponent?:ComponentModel;
}
