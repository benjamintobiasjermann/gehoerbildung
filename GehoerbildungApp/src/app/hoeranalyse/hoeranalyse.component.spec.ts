import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoeranalyseComponent } from './hoeranalyse.component';

describe('HoeranalyseComponent', () => {
  let component: HoeranalyseComponent;
  let fixture: ComponentFixture<HoeranalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoeranalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoeranalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
