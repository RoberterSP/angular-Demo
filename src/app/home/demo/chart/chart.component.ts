import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';
import * as _ from 'lodash';
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
    const state = ['Authorized', 'Denied', 'New', 'Processed', 'Printed', 'QA', 'Received', 'Returned', 'Processor Hold']
    const series = _.map(state, item => {
      return {
        valueField: item,
        name: item,
        label: {
          font: {
            size: 10,
            color: 'yellow'
          }
        }
      }
    })
    const opt = 
    {
      // "editorType": "dxChart",
      // "dataField": "value",
      // "label": {
      //     "text": "Family By Program",
      //     "visible": true
      // },
      // "editorOptions": {},
      // "name": "value",
      // "helpText": "",
      "legend": {
          "itemTextPosition": "right",
          "columnCount": 4,
          "orientation": "horizontal",
          "verticalAlignment": "bottom",
          "horizontalAlignment": "center",
          "visible": true
      },
      "commonSeriesSettings": {
          "type": "bar",
          "argumentField": "Month"
      },
      "series": [
          {
              "valueField": "New",
              "name": "New"
          },
          {
              "valueField": "Printed",

              "name": "Printed"
          },
          {
              "valueField": "Received",

              "name": "Received"
          },
          {
              "valueField": "Authorized",

              "name": "Authorized"
          },
          {
              "valueField": "Processed",

              "name": "Processed"
          },
          {
              "valueField": "QA",

              "name": "QA"
          },
          {
              "valueField": "Processor Hold",

              "name": "Processor Hold"
          },
          {
              "valueField": "Returned",
   
              "name": "Returned"
          },
          {
              "valueField": "Denied",
          
              "name": "Denied"
          },
          {
              "valueField": "Voided",
              "name": "Voided"
          }
      ],
      // "visible": true,
      // "isRequired": false,
      // "argumentField": "name",
      // "visibleInde x": 0,
      // "Url": "/family/queue/family",
      // "CustomTitle": {
      //     "title": "Month",
      //     "type": "date",
      //     "format": "MM/yyyy"
      // }
  }
  this.charts.instance.option(

    {
      "legend": {
          "itemTextPosition": "right",
          "columnCount": 4,
          "orientation": "horizontal",
          "verticalAlignment": "bottom",
          "horizontalAlignment": "center",
          "visible": true
      },
      "commonSeriesSettings": {
          "type": "bar",
          "argumentField": "Month"
      },
      "series": [
          {
              "valueField": "New",
              "label": {
                  "visible": true
              },
              "name": "New"
          },
          {
              "valueField": "Printed",
              "label": {
                  "visible": true
              },
              "name": "Printed"
          },
          {
              "valueField": "Received",
              "label": {
                  "visible": true
              },
              "name": "Received"
          },
          {
              "valueField": "Authorized",
              "label": {
                  "visible": true
              },
              "name": "Authorized"
          },
          {
              "valueField": "Processed",
              "label": {
                  "visible": true
              },
              "name": "Processed"
          },
          {
              "valueField": "QA",
              "label": {
                  "visible": true
              },
              "name": "QA"
          },
          {
              "valueField": "Processor Hold",
              "label": {
                  "visible": true
              },
              "name": "Processor Hold"
          },
          {
              "valueField": "Returned",
              "label": {
                  "visible": true
              },
              "name": "Returned"
          },
          {
              "valueField": "Denied",
              "label": {
                  "visible": true
              },
              "name": "Denied"
          }
      ]
  })

  const opts = {
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
      series: series,
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
    }
    // this.charts.instance.option(opts)
    // for (const key in parmas) {
    //   this.charts.instance.option({
    //     [key]: parmas[key]
    //   })
    // }
      
  }
}


