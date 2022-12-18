import {Component, Input} from '@angular/core';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import {ComponentModel} from "../../../../core/models/component.model";


@Component({
  selector: 'app-device-component-light',
  templateUrl: './device-component-light.component.html',
  styleUrls: ['./device-component-light.component.scss']
})
export class DeviceComponentLightComponent {
  @Input()
  deviceComponent = {} as ComponentModel
  faLightbulb=faLightbulb
}
