import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0206BeethovenAnDieFerneGeliebteComponent } from './hd0206-beethoven-an-die-ferne-geliebte.component';

describe('Hd0206BeethovenAnDieFerneGeliebteComponent', () => {
  let component: Hd0206BeethovenAnDieFerneGeliebteComponent;
  let fixture: ComponentFixture<Hd0206BeethovenAnDieFerneGeliebteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0206BeethovenAnDieFerneGeliebteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0206BeethovenAnDieFerneGeliebteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
