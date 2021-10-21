import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export const enum RenderPage {
  First = 'first',
  Second = 'second',
  Third = 'third',
}


@Injectable()
export class RenderService implements OnDestroy {
  constructor() {}
  stepIndexUpdate$ = new BehaviorSubject<RenderPage>(RenderPage.First);

  updatePage(pageName: RenderPage) {
    this.stepIndexUpdate$.next(pageName);
  }

  // 重置表单值
  reset() {

  }
  ngOnDestroy() {
    this.stepIndexUpdate$.complete();
  }
}
