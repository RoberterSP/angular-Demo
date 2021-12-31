import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';
import { isArray } from 'lodash';
import { fromEvent, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-observerable',
  templateUrl: './observerable.component.html',
  styleUrls: ['./observerable.component.scss']
})
export class ObserverableComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const arr1 = ['ceshi', 1, 2, [3, 4, 'awe', [0,9,9]]];
    const obj = {
      aa:1,
      bb:{
        a:1,
        c: {
          m:2,
          ff:'ww'
        }
      }
    }
    console.log(this.flater(arr1))
    console.log(this.flatobj(obj))
  }
  // Object.prototype.flat()  将对象打平  
  flatobj = (obj: any = {}, result: any = {}, resultkey?: string) => {
    result = result || {}
    resultkey  = resultkey || ''
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const ele = obj[key];
        const ke =  `${resultkey}.${key}`;
        if(typeof ele === 'object') {
          this.flatobj(ele, result, `${resultkey}.${key}`)
        } else {
          result[ke] = ele
        }
        
      }
    }
    return result
  }

  // Array.prototype.flat()  将数组打平  
  flater = (input: any = []) => {
    const stack = [...input]
    const res = []
    while(stack.length) {
      const next = stack.pop()
      if (_.isArray(next)) {
        stack.push(...next);
      } else {
        res.push(next)
      }
    }
    return res.reverse()
  }

}
