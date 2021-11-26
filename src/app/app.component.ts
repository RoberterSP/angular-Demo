import { Component, OnInit  } from '@angular/core';
import { globalInstanceSetting } from './share/globalInstance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularDemo';
  ngOnInit() {
    globalInstanceSetting()
  }
}
