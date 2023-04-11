import {Component} from '@angular/core';
import {ChartDataModel} from "../../../../core/models/chartDataModel";
import {ChartModel} from "../../../../core/models/chartModel";

@Component({
  selector: 'app-room-measurements',
  templateUrl: './room-measurements.page.component.html',
  styleUrls: ['./room-measurements.page.component.scss']
})
export class RoomMeasurementsPageComponent {
  measurements: ChartModel[] = []

  constructor() {
    let measurements: ChartModel = {
      label: "temp", data: [
        {timestamp: "2022-03-08T08:30:00Z", value: 12.5},
        {timestamp: "2022-03-09T08:30:00Z", value: 15},
        {timestamp: "2022-03-11T08:30:00Z", value: 5}
      ]
    };
    let measurements2: ChartModel = {
      label: "hum", data: [
        {timestamp: "2022-03-08T08:30:00Z", value: 9.5},
        {timestamp: "2022-03-09T08:30:00Z", value: 15},
        {timestamp: "2022-03-11T08:30:00Z", value: 1}
      ]
    };
    this.measurements.push(measurements)
    this.measurements.push(measurements2)
  }

}
