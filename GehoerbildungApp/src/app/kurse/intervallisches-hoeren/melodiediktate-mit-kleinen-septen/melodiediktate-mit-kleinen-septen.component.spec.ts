import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitKleinenSeptenComponent } from './melodiediktate-mit-kleinen-septen.component';

describe('MelodiediktateMitKleinenSeptenComponent', () => {
  let component: MelodiediktateMitKleinenSeptenComponent;
  let fixture: ComponentFixture<MelodiediktateMitKleinenSeptenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitKleinenSeptenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitKleinenSeptenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
