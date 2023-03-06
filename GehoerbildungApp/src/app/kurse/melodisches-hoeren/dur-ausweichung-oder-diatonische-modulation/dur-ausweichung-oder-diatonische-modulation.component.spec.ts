import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurAusweichungOderDiatonischeModulationComponent } from './dur-ausweichung-oder-diatonische-modulation.component';

describe('DurAusweichungOderDiatonischeModulationComponent', () => {
  let component: DurAusweichungOderDiatonischeModulationComponent;
  let fixture: ComponentFixture<DurAusweichungOderDiatonischeModulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurAusweichungOderDiatonischeModulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurAusweichungOderDiatonischeModulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
