import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DxPieChartComponent } from 'devextreme-angular';
import { Service } from '../service/app.service';
// 234234
@Component({
  selector: 'app-pie-chart',
  template: `
    <dx-pie-chart></dx-pie-chart>
  `
})
export class DemoPieChartComponent implements  AfterViewInit {
  @Input() data: any;
  @ViewChild(DxPieChartComponent, { static: false }) charts: DxPieChartComponent;
  olympicMedals: any[];
  constructor(
    private service: Service
  ) {
    this.olympicMedals = service.getMedalsData();
  }
  onPointClick(e: any) {
    e.target.select();
  }
  initOption = () => {

  }
  customizeLabel(arg: { valueText: any; percentText: any; }) {
    return `${arg.valueText} (${arg.percentText})`;
  }
  ngAfterViewInit(): void {
    this.charts.instance.option({
      size: {
        height: 800,
        width: 800
      },
      dataSource: this.service.getGrossProductData(),
      title: {
        text: 'Olympic Medals in 2008'
      },
      palette: 'Bright',
      series: {
          valueField: 'year2016',
          argumentField: 'state',
          label: {
            position: 'columns',
            visible: true,
            format: 'percent',
            font: {
              size: 16
            },
            connector: {
              visible: true,
              width: 0.5
            }
          },
        },
      legend: {
        itemTextPosition: 'right',
        orientation: 'horizontal',
        horizontalAlignment: 'center',
        verticalAlignment: 'bottom',
        columnCount: 4
      }
    })
  }
}

