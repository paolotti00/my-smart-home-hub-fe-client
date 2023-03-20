import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComponentModel} from "../../../../../core/models/component.model";
import {ColorRgbModel} from "../../../../../core/models/colorRgb.model";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {ComponentTypeEnum} from "../../../../../core/enums/componentType.enum";
import {Router} from "@angular/router";
import {IconsService} from "../../../../../core/services/icons.service";
import {DeviceService} from "../../../../../core/services/device.service";
import {RouteCustomService} from "../../../../../core/services/route.custom.service";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {OnOffStatusEnum} from "../../../../../core/enums/onOffStatus.enum";

@Component({
  selector: 'app-device-component-base',
  templateUrl: './device-component-base.component.html',
  styleUrls: ['./device-component-base.component.scss']
})
export class DeviceComponentBaseComponent implements OnInit{
  @Input()
  deviceComponent = {} as ComponentModel
  @Input()
  deviceId = ""
  @Input()
  iconColor: ColorRgbModel = {r: 1, g: 1, b: 2};
  @Input()
  icon?: IconDefinition
  @Input()
  value = "";
  @Input()
  showOnOffToggle:boolean = false;
  @Input()
  toggleStatus:OnOffStatusEnum = OnOffStatusEnum.OFF;
  @Output()
  clickedOnComponentDetail = new EventEmitter();
  @Output()
  clickedOnToggleOnOff = new EventEmitter();
  faToggleOn=faToggleOn;
  faToggleOff=faToggleOff;
  OFF = OnOffStatusEnum.OFF
  ON = OnOffStatusEnum.ON

  constructor(private router: Router,private routeCustomService:RouteCustomService, private iconsService: IconsService, private deviceService: DeviceService) {
  }

  ngOnInit(): void {
       if(this.icon == undefined){
         console.warn("prova")
         this.icon = this.iconsService.getComponentIconByType(this.deviceComponent.type)
       }
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
  clickOnToggleOnOff(){
    this.clickedOnToggleOnOff.emit()
  }
}
