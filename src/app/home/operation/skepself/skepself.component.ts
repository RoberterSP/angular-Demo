import { Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';
import { LeafService } from '../leaf.service';

@Component({
  providers: [
    { provide: LeafService, useValue: { emoji: '🍁', extend: 'this is extend' } },
    { provide: FlowerService, useValue: { emoji: '🌻' }},
    { provide: AnimalService, useValue: { emoji: '🐶' } }
  ],
  // viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }],
  selector: 'app-operation-skepself',
  templateUrl: './skepself.component.html',
  styleUrls: ['./skepself.component.scss']
})
export class OperationSkepselfComponent implements OnInit {
// 要在代码中看到这一点，请先假定 emoji 的以下值就是父组件正在使用的值，如本服务所示：
// 想象一下，在子组件中，你有一个不同的值 🍁（枫叶），但你想使用父项的值。你就要使用 @SkipSelf()
// </ng-content>  的是如何投影  @Optional() @SkipSelf() 
  constructor(public leaf?: LeafService,
  public flower?: FlowerService,
  @Optional() @SkipSelf() public animal?: AnimalService
  ) { }

  ngOnInit(): void {
    // this.leaf?.emoji = '🍁'
    // this.leaf?.extend = 'this is extend'
  }

}
