import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0211SchumannDieHuetteComponent } from './hd0211-schumann-die-huette.component';

describe('Hd0211SchumannDieHuetteComponent', () => {
  let component: Hd0211SchumannDieHuetteComponent;
  let fixture: ComponentFixture<Hd0211SchumannDieHuetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0211SchumannDieHuetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0211SchumannDieHuetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
