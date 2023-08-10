import { Component, OnInit  } from '@angular/core';
import { globalInstanceSetting } from './share/globalInstance';
import config from "devextreme/core/config";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularDemo';
  ngOnInit() {
    config({
      defaultUseCurrencyAccountingStyle: true 
    })
    globalInstanceSetting()
  }
}
