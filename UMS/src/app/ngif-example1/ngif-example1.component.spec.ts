import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifExample1Component } from './ngif-example1.component';

describe('NgifExample1Component', () => {
  let component: NgifExample1Component;
  let fixture: ComponentFixture<NgifExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifExample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
