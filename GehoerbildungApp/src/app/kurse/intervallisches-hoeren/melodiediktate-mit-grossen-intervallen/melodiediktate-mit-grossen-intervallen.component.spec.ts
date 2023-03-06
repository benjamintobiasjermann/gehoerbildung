import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitGrossenIntervallenComponent } from './melodiediktate-mit-grossen-intervallen.component';

describe('MelodiediktateMitGrossenIntervallenComponent', () => {
  let component: MelodiediktateMitGrossenIntervallenComponent;
  let fixture: ComponentFixture<MelodiediktateMitGrossenIntervallenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitGrossenIntervallenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitGrossenIntervallenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
