import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-section',
  templateUrl: './inter-section.component.html',
  styleUrls: ['./inter-section.component.scss']
})
export class InterSectionComponent implements OnInit, AfterViewInit {

  boxs = [
    {
      name: 'this is name - 1',
    },
    {
      name: 'this is name - 2',
    },
    {
      name: 'this is name - 3',
    },
    {
      name: 'this is name - 4',
    },
    {
      name: 'this is name - 5',
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // 动画回调函数
    const scrollImations = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
          console.log(111, entry.isIntersecting, entry.intersectionRatio);
          
          if(entry.isIntersecting && entry.intersectionRatio >= 1) {
              // 完全看到元素时
              entry.target.classList.add('box--visible');
          } else {
              // entry.target.classList.remove('box--visible');
              if (document.querySelectorAll('.box--visible').length === this.boxs.length) {
              }
          }
      });
    }

    // 创建观察者
    const options = {
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(scrollImations, options);

    // 指定观察目标
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }

}
