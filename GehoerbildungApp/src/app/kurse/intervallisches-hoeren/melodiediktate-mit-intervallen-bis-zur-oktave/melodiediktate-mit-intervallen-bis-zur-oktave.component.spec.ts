import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitIntervallenBisZurOktaveComponent } from './melodiediktate-mit-intervallen-bis-zur-oktave.component';

describe('MelodiediktateMitIntervallenBisZurOktaveComponent', () => {
  let component: MelodiediktateMitIntervallenBisZurOktaveComponent;
  let fixture: ComponentFixture<MelodiediktateMitIntervallenBisZurOktaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitIntervallenBisZurOktaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitIntervallenBisZurOktaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
