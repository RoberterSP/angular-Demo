import { Component, OnInit } from '@angular/core';
import { Service } from '../service/reader.api.service';
import { RenderService, RenderPage } from '../service/render-page.service';

@Component({
  providers: [Service],
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  employee: any = {};
  positions: any = []
  rules = { 'X': /[02-9]/ };
  constructor(
    private srevice: RenderService,
    private servicedata: Service
  ) { 
    this.positions = servicedata.getPositions();
  }

  ngOnInit(): void {
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Second)
  }

}
