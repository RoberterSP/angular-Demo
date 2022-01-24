import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad.component';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-demo-dynamic-banner',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: any;
  constructor(
    private resolver: ComponentFactoryResolver
    ) {

  }

  ngOnInit() {
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
    }, 10000);
  }

}
