import { Component, OnInit, Optional, Self } from '@angular/core';
import { FlowerService } from '../../flower.service';
import { LeafService } from '../../leaf.service';

@Component({
  selector: 'app-define-dependency-injector',
  templateUrl: './define-dependency-injector.component.html',
  styleUrls: ['./define-dependency-injector.component.scss']
})
export class DefineDependencyInjectorComponent implements OnInit {

  constructor(
    public flower: FlowerService,
    public leaf: LeafService
  ) { }

  ngOnInit(): void {
  }

}
