import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {
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
