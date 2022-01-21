import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';
import { LeafService } from '../leaf.service';

@Component({
  selector: 'app-operation-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class OperationMainComponent implements OnInit {
  arr: any[];

  constructor(
    public flower: FlowerService, 
    public animal: AnimalService, 
    public leaf: LeafService
  ) { }

  ngOnInit(): void {
    this.arr = this.getAa()
  }

  click() {
    const arr = _.cloneDeep(this.arr)
    arr.push({
      Id: arr.length,
      Name: `this is ${arr.length} length`
    })
    this.arr = arr
  }

  trackByItems(index: number, item: any): number { return item.Id; }

  getAa() {
    return [
      {
        Id: 1,
        Name: 'this is first'
      }
    ]
  }

}
