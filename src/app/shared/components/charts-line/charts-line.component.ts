import { Component } from '@angular/core';

@Component({
  selector: 'app-charts-line',
  templateUrl: './charts-line.component.html',
  styleUrls: ['./charts-line.component.scss']
})
export class ChartsLineComponent {
  lineChartData = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
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
  lineChartType = 'line';

  constructor() { }
}
