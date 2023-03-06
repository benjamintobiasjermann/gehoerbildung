import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MollAusweichungOderDiatonischeModulationComponent } from './moll-ausweichung-oder-diatonische-modulation.component';

describe('MollAusweichungOderDiatonischeModulationComponent', () => {
  let component: MollAusweichungOderDiatonischeModulationComponent;
  let fixture: ComponentFixture<MollAusweichungOderDiatonischeModulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MollAusweichungOderDiatonischeModulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MollAusweichungOderDiatonischeModulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
