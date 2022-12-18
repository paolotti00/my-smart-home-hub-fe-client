import {Component, Input} from '@angular/core';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import {ComponentModel} from "../../../../core/models/component.model";
import {Router} from "@angular/router";
import {deviceRoutesName} from "../../../../core/constants/routes.names.constant";


@Component({
  selector: 'app-device-component-light',
  templateUrl: './device-component-light.component.html',
  styleUrls: ['./device-component-light.component.scss']
})
export class DeviceComponentLightComponent {
  @Input()
  deviceComponent = {} as ComponentModel
  faLightbulb=faLightbulb
  constructor(private router: Router) {
  }
  goToDetail(){
    this.router.navigate([deviceRoutesName.DEVICE_BASE_URL+'/'+deviceRoutesName.DEVICE_COMPONENT_LIGHT_DETAILS])
  }
}
