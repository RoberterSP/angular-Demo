import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription, throttleTime } from 'rxjs';
import * as _ from 'lodash';
import { filter, map } from 'rxjs/operators';
// input search
// features: entry  delay(500)

@Component({
  selector: 'app-app-search-bar',
  templateUrl: './app-search-bar.component.html',
  styleUrls: ['./app-search-bar.component.scss']
})
export class AppSearchBarComponent implements OnInit {
  @Input() width:  string | number = 300
  @Input() value: any
  searchOption: any = {};
  values$ = new Subject();
  sub: Subscription;

  constructor() {
    this.onSearchInput = this.onSearchInput.bind(this)
  }

  ngOnInit(): void {
    this.searchOption = {
      icon: 'search',
      type: 'noraml',
      stylingMode: 'text',
      onClick: (e: any) => {
        this.searchInput(e)
      }
    }
    this.sub = this.values$.pipe(
      debounceTime(1000),
      // filter(n => _.toString(n) < 9 )
      distinctUntilChanged() // 判断前一个值和后一个值是否重复
    ).subscribe((event) => {
      this.enterKey(event)
    })
  }
  enterKey(e: any) {
    console.log(e)
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
  searchInput(e:any) {
    console.log(e)

  }
  onSearchInput = (e: any) => {
    this.values$.next(e.event.target.value);
  };
}
