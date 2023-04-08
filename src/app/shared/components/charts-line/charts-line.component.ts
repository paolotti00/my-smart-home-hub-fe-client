import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartType, ChartTypeRegistry} from "chart.js";
import {MeasurementDataModel} from "../../../core/models/measurementDataModel";
import {MeasurementModel} from "../../../core/models/measurementModel";

@Component({
  selector: 'app-charts-line',
  templateUrl: './charts-line.component.html',
  styleUrls: ['./charts-line.component.scss']
})
export class ChartsLineComponent implements OnInit, OnChanges{
  @Input()
  measurements: MeasurementModel[] = []
  lineChartData:any =[];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = "line"

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['measurements'] && !changes['measurements'].firstChange && this.measurements.length >0) {
      this.updateData();
    }
  }
  updateData(){
    if(this.measurements.length>0){
      this.measurements.forEach(measurements=>{
        let data:any[]=[];
        measurements.measurementData.forEach(measurement=> {
          data.push({x:measurement.timestamp,y:measurement.value})
        })
        this.lineChartData.push({data:data,label:measurements.label});
      })
    }
  }

  ngOnInit(): void {
    this.updateData()
  }



}
