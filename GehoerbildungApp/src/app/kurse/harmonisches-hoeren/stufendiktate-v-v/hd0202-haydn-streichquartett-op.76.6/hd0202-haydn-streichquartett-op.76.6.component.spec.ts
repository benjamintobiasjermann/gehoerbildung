import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0202HaydnStreichquartettOp766Component } from './hd0202-haydn-streichquartett-op.76.6.component';

describe('Hd0202HaydnStreichquartettOp766Component', () => {
  let component: Hd0202HaydnStreichquartettOp766Component;
  let fixture: ComponentFixture<Hd0202HaydnStreichquartettOp766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0202HaydnStreichquartettOp766Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0202HaydnStreichquartettOp766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
