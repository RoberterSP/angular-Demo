import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineDependencyInjectorComponent } from './define-dependency-injector.component';

describe('DefineDependencyInjectorComponent', () => {
  let component: DefineDependencyInjectorComponent;
  let fixture: ComponentFixture<DefineDependencyInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineDependencyInjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineDependencyInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
