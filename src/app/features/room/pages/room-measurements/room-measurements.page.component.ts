import {Component} from '@angular/core';
import {MeasurementDataModel} from "../../../../core/models/measurementDataModel";
import {MeasurementModel} from "../../../../core/models/measurementModel";

@Component({
  selector: 'app-room-measurements',
  templateUrl: './room-measurements.page.component.html',
  styleUrls: ['./room-measurements.page.component.scss']
})
export class RoomMeasurementsPageComponent {
  measurements: MeasurementModel[] = []

  constructor() {
    let measurements: MeasurementModel = {
      label: "temp", measurementData: [
        {timestamp: "2022-03-08T08:30:00Z", value: 12.5},
        {timestamp: "2022-03-09T08:30:00Z", value: 15},
        {timestamp: "2022-03-11T08:30:00Z", value: 5}
      ]
    };
    let measurements2: MeasurementModel = {
      label: "hum", measurementData: [
        {timestamp: "2022-03-08T08:30:00Z", value: 9.5},
        {timestamp: "2022-03-09T08:30:00Z", value: 15},
        {timestamp: "2022-03-11T08:30:00Z", value: 1}
      ]
    };
    this.measurements.push(measurements)
    this.measurements.push(measurements2)
  }

}
