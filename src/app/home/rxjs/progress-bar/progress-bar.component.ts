import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, of, empty, fromEvent, from, asyncScheduler } from 'rxjs';
import {
  delay,
  switchMapTo,
  concatAll,
  count,
  scan,
  withLatestFrom,
  share
} from 'rxjs/operators'



@Component({
  selector: 'app-rxjs-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const requestOne = of('first').pipe(delay(500));
    const requestTwo = of('second').pipe(delay(800));
    const requestThree = of('third').pipe(delay(1100));
    const requestFour = of('fourth').pipe(delay(1400));
    const requestFive = of('fifth').pipe(delay(1700));

    const loadButton = document.getElementById('load') as HTMLElement;
    const progressBar = document.getElementById('progress') as HTMLElement;;
    const content = document.getElementById('data') as HTMLElement;;
    // update progress bar as requests complete
    const updateProgress = (progressRatio: number) => {
      console.log('Progress Ratio: ', progressRatio);
      progressBar.style.width = 100 * progressRatio + '%';
      if (progressRatio === 1) {
        progressBar.className += ' finished';
      } else {
        progressBar.className = progressBar.className.replace(' finished', '');
      }
    };
    // simple helper to log updates
    const updateContent = (newContent: string) => {
      content.innerHTML += newContent;
    };

    const displayData = (data: any) => {
      updateContent(`<div class="content-item">${data}</div>`);
    };
    // simulate 5 seperate requests that complete at variable length
    const observables: Array<Observable<string>> = [
      requestOne,
      requestTwo,
      requestThree,
      requestFour,
      requestFive
    ];

    const array$ = from(observables, asyncScheduler);
    array$.subscribe(r => console.log(r))
    const requests$ = array$.pipe(concatAll());
    const clicks$ = fromEvent(loadButton, 'click');

    const progress$ = clicks$.pipe(switchMapTo(requests$), share());

    const count$ = array$.pipe(count());

    const ratio$ = progress$.pipe(
      scan(current => current + 1, 0),
      withLatestFrom(count$, (current, count) => current / count)
    );

    clicks$.pipe(switchMapTo(ratio$)).subscribe(updateProgress);

    progress$.subscribe(displayData);
  }

}
