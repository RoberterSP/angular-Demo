import { Component, OnInit } from '@angular/core';
import { AppDemoDataService } from '../../service/app-data-service.service';

@Component({
  selector: 'app-app-buttons',
  templateUrl: './app-buttons.component.html',
  styleUrls: ['./app-buttons.component.scss']
})
export class AppButtonsComponent implements OnInit {

  constructor(
    public demoDataService: AppDemoDataService
  ) { }

  ngOnInit() {
  }

}
