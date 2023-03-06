import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurLeiterfremdeToeneComponent } from './dur-leiterfremde-toene.component';

describe('DurLeiterfremdeToeneComponent', () => {
  let component: DurLeiterfremdeToeneComponent;
  let fixture: ComponentFixture<DurLeiterfremdeToeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurLeiterfremdeToeneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurLeiterfremdeToeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
