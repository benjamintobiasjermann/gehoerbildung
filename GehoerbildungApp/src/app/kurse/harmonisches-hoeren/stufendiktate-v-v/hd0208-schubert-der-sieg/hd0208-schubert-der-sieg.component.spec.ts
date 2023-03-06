import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0208SchubertDerSiegComponent } from './hd0208-schubert-der-sieg.component';

describe('Hd0208SchubertDerSiegComponent', () => {
  let component: Hd0208SchubertDerSiegComponent;
  let fixture: ComponentFixture<Hd0208SchubertDerSiegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0208SchubertDerSiegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0208SchubertDerSiegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
