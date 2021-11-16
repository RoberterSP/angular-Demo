import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData: any = {}
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
  constructor() { }

  ngOnInit(): void {
  }

}
