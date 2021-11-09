import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDependencyInjectorComponent } from './init-dependency-injector.component';

describe('InitDependencyInjectorComponent', () => {
  let component: InitDependencyInjectorComponent;
  let fixture: ComponentFixture<InitDependencyInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitDependencyInjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDependencyInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
