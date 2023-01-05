import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppDemoDataService implements OnDestroy {

   public behaviorSub = new BehaviorSubject<any>(null)


  constructor() { }
  // init- view
  initView = () => {

  }
  ngOnDestroy(): void {
    if (this.behaviorSub) this.behaviorSub.unsubscribe()
  }
}
