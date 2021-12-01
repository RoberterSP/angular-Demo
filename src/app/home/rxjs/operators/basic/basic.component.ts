import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, map, filter, Subscription, distinct, from, distinctUntilChanged, debounceTime, throttleTime, startWith, scan, first, interval, retryWhen, tap, delayWhen, timer, concatMapTo, of, takeUntil, zip, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class OperatorsBasicComponent implements OnInit, AfterViewInit {
  arr: any = []
  sub: Subscription;
  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.timerFn()
  }
  fromFn(arr: any = []) {
    from(['csp', 'csp1', 'aaaa', 'bbbb'])
      .pipe(
        startWith('🌸'),
        scan((acc, curr) => `${acc} ${curr}`),
        first()
      )
      .subscribe(r => {
        console.log(r, 'fromFn')
      })
  }

  formEventFn() {
    const click$ = fromEvent(document, 'mousemove')
    this.sub = click$.pipe(
      map((event: any) => event.clientX),
      filter((e: number) => e > 1000 && e < 1200),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((r: number) => {
      if (this.arr.length === 10) {
        this.sub.unsubscribe()
      }
      this.arr.push(r)
      console.log(r, this.arr, 'this is from function')
    })
  }
  retryWhenFn() {
    const source = interval(1000);
    const example = source.pipe(
      map(val => {
        if (val > 5) {
          // error will be picked up by retryWhen
          throw val;
        }
        return val;
      }),
      retryWhen(errors =>
        errors.pipe(
          // log error message
          tap(val => console.log(`Value ${val} was too high!`)),
          // restart in 5 seconds
          delayWhen(val => timer(val * 1000))
        )
      )
    );

    const subscribe = example.subscribe(val => console.log(val));
  }

  timerFn() {
    // 每1秒发出值
    const source = interval(1000);
    // 是偶数吗？
    const isEven = (val: number) => val % 2 === 0;
    // 只允许是偶数的值
    const evenSource = source.pipe(filter(isEven));
    // 保存运行中的偶数数量
    const evenNumberCount = evenSource.pipe(scan((acc, _) => acc + 1, 0));
    // 不发出直到发出过5个偶数
    const fiveEvenNumbers = evenNumberCount.pipe(filter(val => val > 5));

    const example = evenSource.pipe(
      // 还给出当前偶数的数量以用于显示
      withLatestFrom(evenNumberCount),
      map(([val, count]) => `Even number (${count}) : ${val}`),
      // 当发出了5个偶数时，source 则完成
      takeUntil(fiveEvenNumbers)
    );
    /*
        Even number (1) : 0,
      Even number (2) : 2
        Even number (3) : 4
        Even number (4) : 6
        Even number (5) : 8
    */
    const subscribe = example.subscribe(val => console.log(val));
  }

  zipFn() {
    let age$ = of(27, 25, 29);
    let name$ = of('Foo', 'Bar', 'Beer');
    let isDev$ = of(true, true, false);

    zip(age$, name$, isDev$)
      .subscribe(x => console.log(x));
  }

}
