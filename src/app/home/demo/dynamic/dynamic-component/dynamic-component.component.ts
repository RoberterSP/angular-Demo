import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad.component';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-demo-dynamic-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template>333333333333</ng-template>
      5555555555
      <ng-template adHost class="box" [defaultValue]="defaultValue">
      </ng-template>
    </div>
  `,
  styles: [
    `
      .ad-banner-example {
        border: 1px solid #eee;
        margin: 20px;
        padding: 20px;
      }
      .box {
        width: 100px;
        height: 200px;
        border: 1px solid red;
      }
    `
  ]
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  defaultValue: string;

  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: any;
  constructor(
    private resolver: ComponentFactoryResolver
    ) {

  }

  ngOnInit() {
    this.defaultValue = 'ceshi'
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    

    const component = this.resolver.resolveComponentFactory(adItem.component)

    const componentRef = viewContainerRef.createComponent<AdComponent>(component);
    componentRef.instance.data = adItem.data;
  } 

  getAds() {
    this.interval = setInterval(() => {
      // 动态展示不同的组件，数据可以动态的传过去；多用于同一个组件里面的内容是来源于不同的组件，有一个宿主
      this.loadComponent();
    }, 100000);
  }

}
