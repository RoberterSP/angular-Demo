import { Component, OnInit } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdService } from '../ad.service';


@Component({
  selector: 'app-dynamic-layout-demo',
  providers: [AdService],
  template: `
    <div>
      <app-demo-dynamic-banner [ads]="ads"></app-demo-dynamic-banner>
    </div>
  `
})
export class AppDynamicBannerComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
