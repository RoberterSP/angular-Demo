import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-operation-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class OperationHostComponent implements OnInit {

  constructor(
    public flower: FlowerService, 
    @Optional() @SkipSelf() public  animal: AnimalService) { }

  ngOnInit(): void {
  }

}
