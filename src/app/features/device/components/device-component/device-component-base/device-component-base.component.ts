import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ColorRgbModel} from "../../../../../core/models/colorRgb.model";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {SensorTypeEnum} from "../../../../../core/enums/sensorType.enum";
import {Router} from "@angular/router";
import {IconsService} from "../../../../../core/services/icons.service";
import {DeviceService} from "../../../../../core/services/device.service";
import {RouteCustomService} from "../../../../../core/services/route.custom.service";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {OnOffStatusEnum} from "../../../../../core/enums/onOffStatus.enum";
import {SensorModel} from "../../../../../core/models/sensor.model";
import {DeviceUtilityService} from "../../../../../core/services/device.utility.service";

@Component({
  selector: 'app-device-component-base',
  templateUrl: './device-component-base.component.html',
  styleUrls: ['./device-component-base.component.scss']
})
export class DeviceComponentBaseComponent implements OnInit, OnChanges {
  @Input()
  sensor?: SensorModel;
  @Input()
  leds?: any;
  @Input()
  deviceId = ""
  @Input()
  iconColor: ColorRgbModel = {r: 1, g: 1, b: 2};
  @Input()
  icon?: IconDefinition
  @Input()
  value = "";
  @Input()
  showOnOffToggle: boolean = false;
  @Input()
  toggleStatus: OnOffStatusEnum = OnOffStatusEnum.OFF;
  @Output()
  clickedOnSensorDetail = new EventEmitter();
  @Output()
  clickedOnToggleOnOff = new EventEmitter();
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;
  OFF = OnOffStatusEnum.OFF
  ON = OnOffStatusEnum.ON

  constructor(private router: Router, private routeCustomService: RouteCustomService, private iconsService: IconsService, private deviceService: DeviceService, private deviceUtilityService: DeviceUtilityService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // leds
    if (this.leds) {
      // icon color
      let fakeLedForTheWholeDevice: number[] = this.deviceUtilityService.getColorWholeDevice(this.leds)
      if (fakeLedForTheWholeDevice.length > 1) {
        this.iconColor.r = fakeLedForTheWholeDevice[0]
        this.iconColor.g = fakeLedForTheWholeDevice[1]
        this.iconColor.b = fakeLedForTheWholeDevice[2]
        if (!((JSON.stringify(this.leds[-1])) === JSON.stringify([0, 0, 0]))) {
          this.toggleStatus = OnOffStatusEnum.ON
        }
      }
    }
  }

  ngOnInit(): void {
    // initialize icon
    if (this.sensor) {
      // sensor
      if (this.icon == undefined) {
        this.icon = this.iconsService.getSensorIconByType(this.sensor.type)
      }
    } else if (this.leds) {
      // leds
      this.icon = this.iconsService.getSensorIconByType(SensorTypeEnum.LIGHT)
      this.value=this.toggleStatus
    }
  }

  goToDetail() {
    this.clickedOnSensorDetail.emit()
    let routeTarget = this.routeCustomService.getRouteToSensorDetail(this.sensor ? this.sensor.type : SensorTypeEnum.LIGHT, this.deviceId, this.sensor ? this.sensor.id : "")
    if (routeTarget) {
      this.router.navigate([routeTarget])
    } else {
      console.warn("routeTarget is undefined")
    }
  }

  clickOnToggleOnOff() {
    if (this.toggleStatus == OnOffStatusEnum.ON) {
      this.toggleStatus = OnOffStatusEnum.OFF;
      this.value=this.toggleStatus
      if (this.leds) {
        this.leds[-1]=[0, 0, 0]
      }
    } else {
      this.toggleStatus = OnOffStatusEnum.ON;
      this.value=this.toggleStatus
    }
    this.deviceService.deviceLightSwitch(this.deviceId, this.toggleStatus).subscribe(result => {
      console.log("led status updated to " + this.toggleStatus)
    })
  }
}
