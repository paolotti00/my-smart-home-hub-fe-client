import {Component, OnInit} from '@angular/core';
import {ChartModel} from "../../../../core/models/chartModel";
import {MeasurementsService} from "../../../../core/services/measurements.service";
import {ViewDataSharingService} from "../../../../core/services/view.data.sharing.service";
import {RoomModel} from "../../../../core/models/room.model";
import {MeasurementsTypeEnum} from "../../../../core/enums/measurementsType.enum";
import {MeasurementModel} from "../../../../core/models/measurementModel";

@Component({
  selector: 'app-room-measurements',
  templateUrl: './room-measurements.page.component.html',
  styleUrls: ['./room-measurements.page.component.scss']
})
export class RoomMeasurementsPageComponent implements OnInit {
  chartDatas: ChartModel[] = []
  room: RoomModel = {} as RoomModel;
  measurements: MeasurementModel[] | undefined;

  constructor(private measurementsService: MeasurementsService, private viewDataSharingService: ViewDataSharingService) {
  }

  ngOnInit(): void {
    // todo get roomId form url
    this.viewDataSharingService.currentRoom.subscribe(result => {
      this.room = result;
      if(!this.measurements){
        this.measurementsService.getMeasurementsByRoomId(this.room.id).subscribe(result => {
          this.updateMeasurements(result.data);
          this.subscribeMeasurementWebsocket();
        })
      }
    })
  }

  updateMeasurements(measurements: MeasurementModel[]) {
    this.measurements = measurements;
    let chartDataTemp: ChartModel = {label: "temperature", data: []};
    let chartDataHum: ChartModel = {label: "humidity", data: []};
    measurements.forEach(measurement => {
      if (measurement.type == MeasurementsTypeEnum.TEMPERATURE) {
        chartDataTemp.data.push({date: measurement.date, value: measurement.value})
      } else if (measurement.type == MeasurementsTypeEnum.HUMIDITY) {
        chartDataHum.data.push({date: measurement.date, value: measurement.value})
      }
    })
    this.chartDatas.push(chartDataTemp);
    this.chartDatas.push(chartDataHum);
    this.chartDatas = this.chartDatas.slice(); // in order to trigger onChanges //https://stackoverflow.com/questions/43223582/why-angular-2-ngonchanges-not-responding-to-input-array-push
  }

  subscribeMeasurementWebsocket(){
    this.measurementsService.getMeasurementsByRoomId(this.room.id).subscribe(result => {
      this.updateMeasurements(result.data);
      // Subscribe to updates for this room using the WebSocket
      this.measurementsService.getRoomMeasurementUpdateFromWebSocket(this.room.id).subscribe(result => {
        this.measurements?.push(result);
      });
    })
  }
}
