import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../dynamic/ad.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements AdComponent, OnInit {
  @Input() data: any;
  longtabs = [
    { text: 'user' },
    { text: 'analytics' },
    { text: 'customers' },
    { text: 'search' },
    { text: 'favorites' },
    { text: 'additional' },
    { text: 'clients' },
    { text: 'orders' },
    { text: 'shipment' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
