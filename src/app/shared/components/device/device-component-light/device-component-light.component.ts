import { Component } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-device-component-light',
  templateUrl: './device-component-light.component.html',
  styleUrls: ['./device-component-light.component.scss']
})
export class DeviceComponentLightComponent {
  faLightbulb=faLightbulb
}
