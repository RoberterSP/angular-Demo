import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waitentitynew-summary',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class WaitEntityNewSummaryComponent implements OnInit {

  formItems: any[] = [];
  formData: any = {};
  constructor() {

    this.formItems = [{
      colCount:1,
      colSpan:1,
      itemType:"group",
      items:[{
        colSpan: 1,
        dataField: "Address",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Address',  visible: true},
        visible:true,
        visibleIndex: 6
      }],
      visible:true,
      visibleIndex:0
    },{
      colCount:1,
      colSpan:1,
      itemType:"group",
      items:[{
        colSpan: 1,
        dataField: "LegalName",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Legal Name',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Phone1",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Phone1',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Phone1",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Phone2',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Cell",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Cell',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Email",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Email',  visible: true},
        visible:true,
        visibleIndex: 6
      }],
      visible:true,
      visibleIndex:0
    },
    {
      colCount:1,
      colSpan:1,
      itemType:"group",
      items:[{
        colSpan: 1,
        dataField: "LegalName",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Type',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Phone1",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'County ID',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Phone1",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Language',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Cell",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'EIN/SSN',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Email",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Use Portal',  visible: true},
        visible:true,
        visibleIndex: 6
      }],
      visible:true,
      visibleIndex:0
    },
    {
      colCount:1,
      colSpan:1,
      itemType:"group",
      items:[{
        colSpan: 1,
        dataField: "License",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'License',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "IssueDate",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Issue Date',  visible: true},
        visible:true,
        visibleIndex: 6
      },
      {
        colSpan: 1,
        dataField: "Capacity",
        editorOptions: {readOnly: true},
        editorType: "dxTextBox",
        itemType: "simple",
        label: {text: 'Capacity',  visible: true},
        visible:true,
        visibleIndex: 6
      }],
      visible:true,
      visibleIndex:0
    }];

    this.formData = {
      Address:"vffdf #3434 Alma, NE 34966-",
      LegalName:"testf company, zippy d",
      Phone1:"(987) 732-8588",
      Phone2:"(980) 745-6387",
      Cell:"(465) 574-8902",
      Email:"zippycompany@mctmail.com",
      Type:"Family Home",
      CountyID:"837",
      Language:"English",
      EINSSN:"**** 2121",
      UsePortal:"",
      License:"111",
      IssueDate:"3/1/2022",
      Capacity:"12 Age Range: 01-10/01-11"  
    }
  }

  ngOnInit(): void {
  }

}
