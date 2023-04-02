import {Component, OnInit} from '@angular/core';
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";
import {faTemperatureFull,faLightbulb,faDroplet} from "@fortawesome/free-solid-svg-icons";
import {GridListElementTypeEnum} from "../../../../core/enums/gridListElementType.enum";

@Component({
  selector: 'app-measurements-summary',
  templateUrl: './measurements-summary.component.html',
  styleUrls: ['./measurements-summary.component.scss']
})
export class MeasurementsSummaryComponent implements OnInit {
  gridListItemInputList: GridListItemInputModel[] = [];
  gridListElementTypeEnum = GridListElementTypeEnum;

  ngOnInit(): void {
    let gridListItemInputTemp: GridListItemInputModel = {} as GridListItemInputModel;
    gridListItemInputTemp.icon = faTemperatureFull;
    gridListItemInputTemp.label = "25°";
    gridListItemInputTemp.title = "temp";
    gridListItemInputTemp.id ="0";
    this.gridListItemInputList.push(gridListItemInputTemp)
    // humidity
    let gridListItemInputHumidity: GridListItemInputModel = {} as GridListItemInputModel;
    gridListItemInputHumidity.icon = faDroplet;
    gridListItemInputHumidity.label = "20%";
    gridListItemInputHumidity.title = "humidity";
    gridListItemInputHumidity.id ="1";
    this.gridListItemInputList.push(gridListItemInputHumidity)
    // test
    let gridListItemInputTest: GridListItemInputModel = {} as GridListItemInputModel;
    gridListItemInputTest.icon = faLightbulb;
    gridListItemInputTest.label = "lights";
    gridListItemInputTest.title = "lights";
    gridListItemInputTest.id ="2";
    this.gridListItemInputList.push(gridListItemInputTest)
  }

  handleElementClick(index: number){

  }

}
