import { RenderService, RenderPage } from '../service/render-page.service';
import { Service } from '../service/reader.api.service';
import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular'
if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  providers: [Service],
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  isMultiline: boolean = true;
  valueContent!: string;
  constructor(
    private srevice: RenderService,
    private servicedata: Service
    
  ) { 
    this.valueContent = servicedata.getMarkup();
  }

  ngOnInit(): void {
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Third)
  }
  backPage() {
    this.srevice.updatePage(RenderPage.First)
  }

}
@NgModule({
  imports: [
      BrowserModule,
      DxHtmlEditorModule,
      DxCheckBoxModule
  ],
  declarations: [SecondComponent],
  bootstrap: [SecondComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)