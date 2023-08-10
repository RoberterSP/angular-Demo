import { Component, OnInit } from '@angular/core';
import { Service } from '../service/app.service';
import { Workbook } from 'exceljs';
import * as saveAs from 'file-saver';
// Our demo infrastructure requires us to use 'file-saver-es'. We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DemoDatagridComponent implements OnInit {
  orders: any = [];
  constructor(private service: Service) {
    this.orders = service.getOrders();
   }

  ngOnInit(): void {
  }
  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('export-supper');

    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'export-supper-data-grid.xlsx');
      });
    });
    e.cancel = true;
  }
}
