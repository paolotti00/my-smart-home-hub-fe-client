import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ComponentModel} from "../../../../core/models/component.model";
import {Router} from "@angular/router";
import {ColorRgbModel} from "../../../../core/models/colorRgb.model";
import {IconsService} from "../../../../core/services/icons.service";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {DeviceService} from "../../../../core/services/device.service";
import {ComponentTypeEnum} from "../../../../core/enums/componentType.enum";
import {RouteCustomService} from "../../../../core/services/route.custom.service";
import {ComponentLightModel} from "../../../../core/models/component.light.model";
import {DeviceUtilityService} from "../../../../core/services/device.utility.service";


@Component({
  selector: 'app-device-component',
  templateUrl: './device-component.component.html',
  styleUrls: ['./device-component.component.scss']
})
export class DeviceComponentComponent implements OnInit, OnChanges {
  @Input()
  deviceComponent = {} as ComponentModel
  @Input()
  deviceId = ""
  @Output()
  clickedOnComponentDetail = new EventEmitter();

  iconColor: ColorRgbModel = {r: 1, g: 1, b: 2};
  icon: IconDefinition = this.iconsService.getComponentIconByType(ComponentTypeEnum.MIX) // default
  value = "";

  constructor(private router: Router, private iconsService: IconsService, private deviceService: DeviceService, private deviceUtilityService:DeviceUtilityService, private routeCustomService:RouteCustomService){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.deviceComponent){
      // value
      this.value = this.deviceService.getComponentValue(this.deviceComponent);
      // icon color
      if(this.deviceComponent.type== ComponentTypeEnum.LIGHT){
        let deviceComponentLight: ComponentLightModel = this.deviceComponent as ComponentLightModel;
        let fakeLedForTheWholeDevice = this.deviceUtilityService.getColorWholeDevice(deviceComponentLight.leds)
        if(fakeLedForTheWholeDevice){
          let rgbArray: string[] = this.deviceUtilityService.getRgbArrayFromRgbString(fakeLedForTheWholeDevice.rgbColor)
          this.iconColor.r = Number(rgbArray[0])
          this.iconColor.g = Number(rgbArray[1])
          this.iconColor.b = Number(rgbArray[2])
        }
      }
    }
  }

  ngOnInit(): void {
    // initialize icon
    this.icon = this.iconsService.getComponentIconByType(this.deviceComponent.type)
    // initialize value
  }

  goToDetail(){
    this.clickedOnComponentDetail.emit()
    let routeTarget = this.routeCustomService.getRouteToComponentDetail(this.deviceComponent.type,this.deviceId,this.deviceComponent.id)
    if(routeTarget){
      this.router.navigate([routeTarget])
    } else {
      console.warn("routeTarget is undefined")
    }
  }
}
