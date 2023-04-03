import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";
import {faTemperatureFull, faLightbulb, faDroplet} from "@fortawesome/free-solid-svg-icons";
import {GridListElementTypeEnum} from "../../../../core/enums/gridListElementType.enum";

@Component({
  selector: 'app-measurements-summary',
  templateUrl: './measurements-summary.component.html',
  styleUrls: ['./measurements-summary.component.scss']
})
export class MeasurementsSummaryComponent implements OnChanges {
  @Input()
  temp: any = undefined;
  @Input()
  humidity: any = undefined;
  @Input()
  haveLights: boolean = false;
  gridListItemInputList: GridListItemInputModel[] = [];
  gridListElementTypeEnum = GridListElementTypeEnum;
  indexTemp: number | undefined;
  indexHum: number | undefined;
  indexLights: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temp'] && !changes['temp'].firstChange && this.temp !== undefined) {
      if (!this.indexTemp) {
        let gridListItemInputTemp: GridListItemInputModel = {} as GridListItemInputModel;
        gridListItemInputTemp.icon = faTemperatureFull;
        gridListItemInputTemp.label = this.temp + "°";
        gridListItemInputTemp.title = "temp";
        this.indexTemp = this.gridListItemInputList.push(gridListItemInputTemp)-1
        this.gridListItemInputList[this.indexTemp].id = String(this.indexTemp)
      } else {
        this.gridListItemInputList[this.indexTemp].label = this.temp + "°"
      }
    }
    // humidity
    if (changes['humidity'] && !changes['humidity'].firstChange && this.humidity !== undefined) {
      if (!this.indexHum) {
        let gridListItemInputHumidity: GridListItemInputModel = {} as GridListItemInputModel;
        gridListItemInputHumidity.icon = faDroplet;
        gridListItemInputHumidity.label = this.humidity + "%";
        gridListItemInputHumidity.title = "humidity";
        this.indexHum = this.gridListItemInputList.push(gridListItemInputHumidity)-1
        this.gridListItemInputList[this.indexHum].id = String(this.indexHum)
      } else {
        this.gridListItemInputList[this.indexHum].label = this.humidity + "%"
      }

    }
    // test
    if (changes['haveLights']  && this.haveLights !== undefined) {
      if (!this.indexLights) {
        let gridListItemInputTest: GridListItemInputModel = {} as GridListItemInputModel;
        gridListItemInputTest.icon = faLightbulb;
        gridListItemInputTest.label = "lights";
        gridListItemInputTest.title = "lights";
        this.indexLights = this.gridListItemInputList.push(gridListItemInputTest)-1
        this.gridListItemInputList[this.indexLights].id = String(this.indexLights)
      } else {
        this.gridListItemInputList[this.indexLights].label = "lights"
      }

    }
  }

  handleElementClick(index: number) {

  }
}
