import { Component, OnInit, AfterViewInit } from '@angular/core';
import { debounce, fromEvent, interval, map, scan, throttleTime } from 'rxjs';
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

