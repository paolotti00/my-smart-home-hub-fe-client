import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {ComponentModel} from "../../../../../core/models/component.model";
import {ColorRgbModel} from "../../../../../core/models/colorRgb.model";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {ComponentTypeEnum} from "../../../../../core/enums/componentType.enum";
import {Router} from "@angular/router";
import {IconsService} from "../../../../../core/services/icons.service";
import {DeviceService} from "../../../../../core/services/device.service";
import {DeviceUtilityService} from "../../../../../core/services/device.utility.service";
import {RouteCustomService} from "../../../../../core/services/route.custom.service";
import {ComponentLightModel} from "../../../../../core/models/component.light.model";
import {OnOffStatusEnum} from "../../../../../core/enums/onOffStatus.enum";

@Component({
  selector: 'app-device-component-light',
  templateUrl: './device-component-light.component.html',
  styleUrls: ['./device-component-light.component.scss']
})
export class DeviceComponentLightComponent {
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
  onClickedOnComponentDetail(){
    this.clickedOnComponentDetail.emit()
  }
  onClickedOnToggleOnOff(){
    // todo call service to switch on of light

    console.log("todo call service to switch on of light")
    let deviceStatusToSet : OnOffStatusEnum
    if(this.deviceComponent.status==OnOffStatusEnum.ON){
      deviceStatusToSet = OnOffStatusEnum.OFF;
      this.deviceComponent.status=OnOffStatusEnum.OFF;
    } else {
      deviceStatusToSet = OnOffStatusEnum.ON;
    }
    this.deviceService.deviceLightSwitch(this.deviceId,deviceStatusToSet).subscribe(result=>{
      this.deviceComponent.status=deviceStatusToSet;
    })

  }
}
