import { Component, OnInit } from '@angular/core';
import { RenderService, RenderPage } from '../service/render-page.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(
    private srevice: RenderService
  ) { }

  ngOnInit(): void {
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Third)
  }
  backPage() {
    this.srevice.updatePage(RenderPage.First)
  }

}
