import { Component } from '@angular/core';
import {DeviceService} from "../../../../core/services/device.service";

@Component({
  selector: 'app-device-component-light-color',
  templateUrl: './device-component-light-color.component.html',
  styleUrls: ['./device-component-light-color.component.scss']
})
export class DeviceComponentLightColorComponent {
  constructor(private deviceService: DeviceService) {
  }
  onColorChanged(color: string) { //todo get the id
    this.deviceService.deviceSetColor('63f942f9084ffe764b6003e2',color).subscribe(response=>{
      console.log('Color set successfully:', response);
    },error => {
      console.error('Error setting color:', error);
    })
  }
}
