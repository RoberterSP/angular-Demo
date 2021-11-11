import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';
import { LeafService } from '../leaf.service';

@Component({
  selector: 'app-operation-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class OperationMainComponent implements OnInit {

  constructor(
    public flower: FlowerService, 
    public animal: AnimalService, 
    public leaf: LeafService
  ) { }

  ngOnInit(): void {
  }

}
