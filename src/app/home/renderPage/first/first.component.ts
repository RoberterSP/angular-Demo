import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Service } from '../service/reader.api.service';
import { RenderService, RenderPage } from '../service/render-page.service';
import {
  DxValidationGroupComponent,
  DxFormComponent } from 'devextreme-angular';
@Component({
  providers: [Service],
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @ViewChild('form', { static: false })
  form: DxFormComponent;
  @ViewChild('form2', { static: false })
  form2: DxFormComponent;
  @ViewChild('validGroup', { static: false }) validGroup: DxValidationGroupComponent;
  @ViewChildren(DxFormComponent) dxForms: QueryList<DxFormComponent>;
  employee: any = {};
  positions: any = []
  rules = { 'X': /[02-9]/ };
  constructor(
    private srevice: RenderService,
    private servicedata: Service
  ) { 
    this.positions = servicedata.getPositions();
  }

  submit = async () => {
    if (this.validate()) {
      console.log(1)
    }
  }
  validate = () => {
      const formList = this.dxForms.toArray();
      let isValid = true;
      formList.forEach(item => {
        if (item.instance.validate().isValid === false) {
          isValid = false;
        }
      });
      return isValid;
  };

  ngOnInit(): void {
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Second)
  }

}
