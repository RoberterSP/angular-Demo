import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
// import jsonLogic from 'json-logic-js/logic.js';
// import * as fs from 'fs';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class CC4DemoNodeComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    // this.writeToFile({}, 'aa.text')
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }


/**
 * @description 导入某个数据到某个文件
 * @param {any} data 
 * @param {string} filename
 * **/ 
  // writeToFile = (data: any, filename: string) => {
  //   fs.writeFileSync(filename, data)
  // }

}
