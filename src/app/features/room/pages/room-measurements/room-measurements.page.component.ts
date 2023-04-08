import { Component } from '@angular/core';
import {MeasurementModel} from "../../../../core/models/measurement.model";

@Component({
  selector: 'app-room-measurements',
  templateUrl: './room-measurements.page.component.html',
  styleUrls: ['./room-measurements.page.component.scss']
})
export class RoomMeasurementsPageComponent {
  measurements: MeasurementModel[][] = []
  constructor()
   {
     let measurements: MeasurementModel[] = [{timestamp:"2022-03-08T08:30:00Z",value:12.5},{timestamp:"2022-03-09T08:30:00Z",value:5}]
     this.measurements.push(measurements)
  }

}
