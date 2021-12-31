import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export const enum RenderPage {
  First = 'first',
  Second = 'second',
  Third = 'third',
}


@Injectable()
export class RenderService implements OnDestroy {
  number: number;
  constructor() {}
  stepIndexUpdate$ = new BehaviorSubject<RenderPage>(RenderPage.First);

  updatePage(pageName: RenderPage) {
    this.stepIndexUpdate$.next(pageName);
  }
  // 重置表单值
  reset() {

  }
  getNumber() {
    return this.number || 0
  }
  addNumber() {
    this.number++
  }
  reduceNumber() {
    this.number = this.number - 1
  }
  ngOnDestroy() {
    this.stepIndexUpdate$.complete();
  }
}
