import { Component, OnInit, ViewChild } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild(DxPopupComponent, { static: false }) popupform: DxPopupComponent;
  elementAttr: any = {}
  disabled: boolean;
  constructor() { }
  popupToolbarItems: any = []

  ngOnInit(): void {
    this.initButtons();
  }
  startLoading = () => {
    _.set(this.elementAttr, 'class', 'loading');
    this.elementAttr = { ...this.elementAttr };
    if (!this.disabled) this.disabled = true;
  };
  endLoading = () => {
    _.set(this.elementAttr, 'class', '');
    this.elementAttr = { ...this.elementAttr };
    if (this.disabled) this.disabled = false;
  };
  delay = (times = 0) => new Promise(resolve => setTimeout(resolve, times))
  initButtons() {
    this.popupToolbarItems = [
      {
        widget: 'dxButton',
        toolbar: 'bottom',
        location: 'after',
        options: {
          text: 'Cancel',
          type: 'normal',
          elementAttr: this.elementAttr,
          onClick: () => {
            console.log('first cancel button')
          }
        }
      },
      {
        widget: 'dxButton',
        toolbar: 'bottom',
        location: 'after',
        options: {
          text: 'Save',
          type: 'default',
          onClick: async () => {
            this.startLoading()
            await this.delay(4000).then(r => {
              this.endLoading()
            })
          }
        }
      },
      {
        widget: 'dxButton',
        toolbar: 'top',
        location: 'after',
        options: {
          type: 'normal',
          icon: 'close',
          stylingMode: 'text',
          onClick: (e: any) => {
            console.log('first close button', e)
            this.popupform.instance.hide()
          }
        }
      },
      {
        widget: 'dxButton',
        toolbar: 'top',
        location: 'after',
        options: {
          type: 'normal',
          icon: 'more',
          stylingMode: 'text',
          onClick: (e: any) => {
            console.log('more close button', e)
          }
        }
      }
    ]
  }

}
