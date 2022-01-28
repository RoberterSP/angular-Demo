import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';
import { AdComponent } from '../dynamic/ad.component';
import { Service } from './../service/app.service';
// 234234
@Component({
  selector: 'app-chart',
  template: `
    <dx-chart
    [dataSource]="grossProductData"
    (onPointClick)="onPointClick($event)"
  >
  </dx-chart>
  `
})
export class DemoBarChartComponent implements AdComponent,  AfterViewInit {
  @Input() data: any;
  @ViewChild(DxChartComponent, { static: false }) charts: DxChartComponent;
  grossProductData: any[];
  constructor(
    private service: Service
  ) {
    this.grossProductData = service.getGrossProductData();
  }
  onPointClick(e: any) {
    e.target.select();
  }
  initOption = () => {
  }
  ngAfterViewInit(): void {
    this.charts.onPointClick.subscribe(arg => {
      console.log(arg.target.data)
    })
    this.charts.instance.option({
      title: {
        text: 'Gross State Product within the Great Lakes Region 1',
        textOverflow: 'ellipsis',
        wordWrap: 'none',
        subtitle: {
          text: 'this is sub title'
        }
      },
      animation: {
        easing: "linear",
        duration: 500,
        maxPointCountSupported: 100
      },
      tooltip: {
        enabled: true,
        customizeTooltip: (pointInfo: any) => {
          return `
            ${pointInfo.valueText}   ${pointInfo.value}
          `
        },
        shadow: {
          color: 'white'
        }
      },
      rotated: false,
      series: [
        {
          valueField: 'year2018',
          name: '2018',
          label: {
            font: {
              size: 10,
              color: 'yellow'
            },
            customizeText: (pointInfo: any) => {
              return `${pointInfo.valueText} this is ceshi`
            },
            rotationAngle: 75
          }
        },
        {
          valueField: 'year2017',
          name: '2017',
          label: {
            font: {
              size: 12,
              color: 'green'
            },
            customizeText: (pointInfo: any) => {
              return `${pointInfo.valueText} this is ceshi`
            },
            rotationAngle: 75
          }
        },
        {
          valueField: 'year2016',
          name: '2016',
          label: {
            font: {
              size: 14,
              color: 'red'
            },
            customizeText: (pointInfo: any) => {
              return `${pointInfo.valueText} this is ceshi`
            },
            rotationAngle: 75
          }
        }
      ],
      scrollBar: {
        visible: true,
      },
      size: {
        height: 800,
        width: 800
      },
      legend: {
        verticalAlignment: 'bottom',
        orientation: 'horizontal',
        horizontalAlignment: 'center'
      },
      export: {
        enabled: false
      },
      commonSeriesSettings: {
        argumentField: 'state',
        type: 'bar',
        hoverMode: 'allArgumentPoints',
        selectionMode: 'allArgumentPoints',
        label: {
          visible: true,
          format: {
            type: "fixedPoint",
            precision: 1
          }
        }
      }

      
    })
    // for (const key in parmas) {
    //   this.charts.instance.option({
    //     [key]: parmas[key]
    //   })
    // }
      
  }
}


