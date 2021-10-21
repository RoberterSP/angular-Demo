import { Component, OnInit } from '@angular/core';
import { RenderService, RenderPage } from '../service/render-page.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(
    private srevice: RenderService
  ) { }

  ngOnInit(): void {
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Second)
  }

}
