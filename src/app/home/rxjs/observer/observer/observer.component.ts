import { Component, OnInit, AfterViewInit } from '@angular/core';
import { debounce, filter, distinctUntilChanged, distinctUntilKeyChanged, fromEvent, interval, map, of, scan, throttleTime, mapTo, take, takeUntil, switchMap } from 'rxjs';
@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const clicks$ = fromEvent(document, 'click');
    const greetings = clicks$.pipe(
      map((x:any) => x.clientX),
      filter(x => x < 1000),
      take(4)
      )
    greetings.subscribe(x => console.log(x))

    const source = interval(1000);
    const clicks = fromEvent(document, 'click');
    // const result = source.pipe(takeUntil(clicks));
    const result = clicks.pipe(switchMap((ev) => interval(1000)));
    result.subscribe(x => console.log(x));


    of (
      {
        name: 'csp',
        age: 31
      },
      {
        name: 'melody',
        age: 32
      },
      {
        name: 'this is old age',
        age: 100
      },
      {
        name: 'this is repeat name',
        age: 32
      },
      {
        name: 'yaoyao',
        age: 1.2
      },
      {
        name: 'yaoyao1',
        age: 18
      }
    ).pipe (
      distinctUntilChanged((a, b) => {
        return a.name.substring(0,3) === b.name.substring(0,3)
      }),
      distinctUntilKeyChanged('age', (a:number,b:number) => {
        return a === b;
      }),
      filter((x: any) => x.age < 100)
    ).subscribe({
      next: (x) => console.log(x.name, 'this is next'),
    })
    .unsubscribe()
    const throttleConfig = {
      leading: false,
      trailing: true
    }
    const myEle = document.getElementById('customP') as HTMLElement
    fromEvent( myEle , 'click')
    .pipe(
      throttleTime(100),
      map((event: any) => event.clientX),
      scan((count, clientX) => count + clientX , 0),
      debounce((i) => interval(200*i))
      )
    .subscribe((count)=>{
      console.log(`${count} click`)
    })


  }

}

