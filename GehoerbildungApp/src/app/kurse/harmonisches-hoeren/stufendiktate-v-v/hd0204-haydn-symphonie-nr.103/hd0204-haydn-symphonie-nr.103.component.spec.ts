import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0204HaydnSymphonieNr103Component } from './hd0204-haydn-symphonie-nr.103.component';

describe('Hd0204HaydnSymphonieNr103Component', () => {
  let component: Hd0204HaydnSymphonieNr103Component;
  let fixture: ComponentFixture<Hd0204HaydnSymphonieNr103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0204HaydnSymphonieNr103Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0204HaydnSymphonieNr103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
