import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MollLeiterfremdeToeneComponent } from './moll-leiterfremde-toene.component';

describe('MollLeiterfremdeToeneComponent', () => {
  let component: MollLeiterfremdeToeneComponent;
  let fixture: ComponentFixture<MollLeiterfremdeToeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MollLeiterfremdeToeneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MollLeiterfremdeToeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
