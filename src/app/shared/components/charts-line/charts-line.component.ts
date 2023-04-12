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
  chartDataList: ChartModel[] = []
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
    if (changes['chartDataList'] && !changes['chartDataList'].firstChange && this.chartDataList.length >0) {
      this.updateData();
    }
  }
  updateData(){
    if(this.chartDataList.length>0){
      this.chartDataList.forEach(chartData=>{
        let data:any[]=[];
        chartData.data.forEach(measurement=> {
          data.push({x:measurement.date,y:measurement.value})
        })
        this.lineChartData.push({data:data,label:chartData.label});
        this.lineChartData = this.lineChartData.slice(); // in order to trigger onChanges //https://stackoverflow.com/questions/43223582/why-angular-2-ngonchanges-not-responding-to-input-array-push
      })
    }
  }

  ngOnInit(): void {
    this.updateData()
  }



}
