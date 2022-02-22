import { Component, OnInit } from '@angular/core';

// import * as fs from 'fs';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class CC4DemoNodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.writeToFile({}, 'aa.text')
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
