import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkepselfComponent } from './skepself.component';

describe('SkepselfComponent', () => {
  let component: SkepselfComponent;
  let fixture: ComponentFixture<SkepselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkepselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkepselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
