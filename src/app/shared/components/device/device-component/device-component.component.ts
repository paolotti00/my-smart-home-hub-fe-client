import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";
import {Router} from "@angular/router";
import {deviceRoutesName} from "../../../../core/constants/routes.names.constant";
import {ColorRgbModel} from "../../../../core/models/colorRgb.model";
import {IconsService} from "../../../../core/services/icons.service";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {DeviceService} from "../../../../core/services/device.service";
import {ComponentTypeEnum} from "../../../../core/enums/componentType.enum";


@Component({
  selector: 'app-device-component',
  templateUrl: './device-component.component.html',
  styleUrls: ['./device-component.component.scss']
})
export class DeviceComponentComponent implements OnInit, OnChanges {
  @Input()
  deviceComponent = {} as ComponentModel
  iconColor: ColorRgbModel = {r: 1, g: 1, b: 2};
  icon: IconDefinition = this.iconsService.getComponentIconByType(ComponentTypeEnum.MIX) // default
  value = "";

  constructor(private router: Router, private iconsService: IconsService, private deviceService: DeviceService){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.deviceComponent){
      // value
      this.value = this.deviceService.getComponentValue(this.deviceComponent);
      // icon color
      if(this.deviceComponent.type== ComponentTypeEnum.LIGHT){
        this.iconColor.r = this.deviceComponent.workingStatus.out.colorRgb.r
        this.iconColor.g = this.deviceComponent.workingStatus.out.colorRgb.g
        this.iconColor.b = this.deviceComponent.workingStatus.out.colorRgb.b
      }
    }
  }

  ngOnInit(): void {
    // initialize icon
    this.icon = this.iconsService.getComponentIconByType(this.deviceComponent.type)
    // initialize value
  }

  goToDetail(){
    this.router.navigate([deviceRoutesName.DEVICE_BASE_URL+'/'+deviceRoutesName.DEVICE_COMPONENT_LIGHT_DETAILS])
  }
}
