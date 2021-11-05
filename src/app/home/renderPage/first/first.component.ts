import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Service } from '../service/reader.api.service';
import { RenderService, RenderPage } from '../service/render-page.service';
import {
  DxValidationGroupComponent,
  DxFormComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
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
  dataUpdate = new Observable();
  employee: any = {};
  positions: any = []
  rules = { 'X': /[02-9]/ };
  options = {
    icon: 'check',
    text: 'save',
    type: 'default',
    stylingMode:'contained',
    onclick: () => {
      console.log('#####')
    }
  };
  valueForEditableTextArea: any;
  constructor(
    private srevice: RenderService,
    private servicedata: Service
  ) { 
    this.positions = servicedata.getPositions();
  }
  click() {

  }
  onEnterKey(e:any){
    console.log(e)
  }

  submit = async () => {
    if (this.validate()) {
      console.log(1)
    }
  }
  validate = () => {
    // 批量的校验
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
    // observable abstract
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Second)
  }

}
