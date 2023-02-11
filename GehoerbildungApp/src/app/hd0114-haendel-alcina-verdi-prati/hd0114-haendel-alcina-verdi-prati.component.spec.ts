import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0114HaendelAlcinaVerdiPratiComponent } from './hd0114-haendel-alcina-verdi-prati.component';

describe('Hd0114HaendelAlcinaVerdiPratiComponent', () => {
  let component: Hd0114HaendelAlcinaVerdiPratiComponent;
  let fixture: ComponentFixture<Hd0114HaendelAlcinaVerdiPratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0114HaendelAlcinaVerdiPratiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0114HaendelAlcinaVerdiPratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
