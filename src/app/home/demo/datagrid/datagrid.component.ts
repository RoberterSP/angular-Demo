import { Component, OnInit } from '@angular/core';
import { Service } from '../service/app.service';

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

}
