import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class DemoParamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.set_repeat()
    this.recursion()

  }
  recursion() {
    // console.log(this.generate_fib(3), 'generate_fib')
    // console.log(this.sum_n(3), 'sum')
    this.generate_fib(10)
    this.sum_n(3)
    let arr = [[0, 3, 1], [2, 3], [4,[5,6,7]]]
    this.change_multiple_to_single_arr(arr)
  }
  // recude -- 多维数组打平 
  change_multiple_to_single_arr (arr: any =[]) {
    const newarr = (arr: any = []) => {
      return arr.reduce((pre: any = [], cur: any = []) => 
        pre.concat(Array.isArray(cur) ? newarr(cur) : cur)
      , [])
    }
    return [...new Set(newarr(arr))].sort()
    
  }



  set_repeat() {
    const aa = [{x: 1}, {x: 2}, {x: 3}, {x:2}, {x:8}, {x:3}, {x:6}]
    this.sum_reduce();
    this.repeat_reduce(aa);
    this.repeat_map(aa)
  }

  sum_reduce() {
    const aa = [{x: 1}, {x: 2}, {x: 3}, {x:2}]
    let sum = aa.reduce((pre, cur) => {
      return pre + cur.x;
    }, 0)
    console.log(sum)
  }


  // reduce 去重 1
  repeat_reduce_1(obj: any = {}) {
    const aa = [{x: 1}, {x: 2}, {x: 3}, {x:2}]
    let sum = aa.reduce((pre: any = [],cur: any) => {
       if (obj[cur.x]) {
        obj[cur.x] = false
       } else {
        obj[cur.x] = true
        pre.push(cur)
       }
       return pre;
    }, [])
    console.log(sum)
  }

  // reduce 去重 
  repeat_reduce(source: any = [], obj: any = {}) {
    let sum = source.reduce((pre: any = [],cur: any) => {
       obj[cur.x] ? false : obj[cur.x] = true && pre.push(cur)
       return pre
    }, [])
    console.log(sum, 'repeat_reduce')
  }

  repeat_map(source: any = [], newarr: any = []) {
    let map = new Map()
    source.forEach((item: any) => {
      if (!map.has(item.x)) {
        map.set(item.x, true)
        newarr.push(item)
      }
    })
    console.log(newarr, 'repeat_map')
  }

  // F(0)=0; F(1)=1; F(n)=F(n-1) + F(n-2)
  generate_fib = (n: number) => {
    const _fib = (n: number) => {
      if (n < 2) {
        return n
      }
      const sum: number = _fib(n-1) + _fib(n-2)
      return sum;
    }
    console.log(_fib(n), 'generate_fib')
      
  }
  // n 的阶乘
  sum_n = (n: number, newarr: any = []) => {
    let _newarr: any[] = []
    const sums = (n: number, newarr: any = []) => {
      _newarr = [...newarr]
      if (n ===1) {
        _newarr.push(n)
        return 1
      }
      const _sum: number = sums(n-1, newarr) + n
      _newarr.push(n)
      return _sum
    }
    console.log(sums(n), _newarr, 'sum')
    
  }
}
