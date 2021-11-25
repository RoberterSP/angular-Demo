/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObserverableComponent } from './observerable.component';

describe('ObserverableComponent', () => {
  let component: ObserverableComponent;
  let fixture: ComponentFixture<ObserverableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
