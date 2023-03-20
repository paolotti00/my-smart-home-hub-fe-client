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
export class DeviceComponentComponent implements OnChanges{
  @Input()
  deviceComponent = {} as ComponentModel
  @Input()
  deviceId = ""
  @Output()
  clickedOnComponentDetail = new EventEmitter();
  value=""
  LIGHT = ComponentTypeEnum.LIGHT
  constructor(private router: Router, private iconsService: IconsService, private deviceService: DeviceService, private deviceUtilityService:DeviceUtilityService, private routeCustomService:RouteCustomService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.deviceComponent){
      // value
      this.value = this.deviceService.getComponentValue(this.deviceComponent);
    }
  }

  onClickedOnComponentDetail(){
    this.clickedOnComponentDetail.emit()
  }
}
