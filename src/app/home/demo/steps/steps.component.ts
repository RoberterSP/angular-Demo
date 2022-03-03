import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { debounceTime, fromEvent, map, Subscription } from 'rxjs';
@Component({
  selector: 'nz-demo-steps-step-next',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class DemoStepsComponent {

  sub: Subscription;
  current = 0;

  index = 'First-content'; 
  arr: any= [];
  doms = ['name1', 'name2', 'name3', 'name4', 'name5']

  getTop() {
    this.doms.forEach((ele, index) => {
      const myEle = document.querySelector(`.${ele}`) as HTMLElement
      const top = myEle.getBoundingClientRect().top
      const height = myEle.getBoundingClientRect().height
      if (Math.abs(top)>10 && Math.abs(top) < height && top < 0) {
        this.current = index
      }
    });
  }
  onIndexChange(index: number): void {
    this.current = index;
    this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: `.name${index + 1}`,
      });
  }
  
  formEventFn () {
    const click$ = fromEvent(document, 'scroll')

    this.sub = click$.pipe(
      map((event: any) => {
        return this.getTop()
      }),
      debounceTime(100)
    ).subscribe((r:any) => {
      console.log(r, 'this is from function')
    })
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  ngOnInit(): void {
    // this.writeToFile({}, 'aa.text')
    this.formEventFn()
    // this.pageScrollService.scroll({
    //   document: this.document,
    //   scrollTarget: '.name3',
    // });
  }

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

}