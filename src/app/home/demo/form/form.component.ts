import { Component, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent, DxTextAreaComponent } from 'devextreme-angular';
import { Service } from '../service/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild(DxTextAreaComponent, { static: false }) textBox: DxTextAreaComponent;
  @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;

  formData: any = {}
  employee = {}
  items=[
    {
      dataField: 'SOO1',
      helpText: 'helpText',
      editorType: 'dxTextBox',
      // template: 'gridTemplate'
    },
    {
      dataField: 'SOO2',
      helpText: 'helpText',
      editorType: 'dxTextBox',
      template: 'gridTemplate1'
    },
    {
      dataField: 'SOO3',
      helpText: 'helpText',
      editorType: 'dxTextBox',
    },
    {
      dataField: 'SOO4',
      helpText: 'helpText',
      editorType: 'dxTextBox',
    }
  ]
  constructor(
   public service: Service
  ) { 
    this.employee = service.getEmployee();
  }

  ngOnInit(): void {
    console.log(this.service.drawName)

  }
  onKeyDown(e: any) {
    console.log(e)
    if (e.event.which == 13) {
      e.event.preventDefault();
  }
    // e.event.preventDefault();
    // e.event.stopPropagation();
  }
  ngAfterViewInit() {
    // const taht = this
    // setTimeout(() => {
    //   taht.scrollView.instance.scrollTo({
    //     left: 0,
    //     top: this.scrollView.instance.scrollHeight(),
    //   });
    //   setTimeout(() => {
    //     taht.textBox.instance.focus()
    //   }, 3000);

    // }, 3000);
  }

}
