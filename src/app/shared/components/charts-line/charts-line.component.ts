import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartType, ChartTypeRegistry} from "chart.js";
import {ChartDataModel} from "../../../core/models/chartDataModel";
import {ChartModel} from "../../../core/models/chartModel";

@Component({
  selector: 'app-charts-line',
  templateUrl: './charts-line.component.html',
  styleUrls: ['./charts-line.component.scss']
})
export class ChartsLineComponent implements OnInit, OnChanges{
  @Input()
  measurements: ChartModel[] = []
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
        measurements.data.forEach(measurement=> {
          data.push({x:measurement.date,y:measurement.value})
        })
        this.lineChartData.push({data:data,label:measurements.label});
      })
    }
  }

  ngOnInit(): void {
    this.updateData()
  }



}
