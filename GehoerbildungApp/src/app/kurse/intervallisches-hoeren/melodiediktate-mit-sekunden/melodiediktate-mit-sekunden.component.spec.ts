import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitSekundenComponent } from './melodiediktate-mit-sekunden.component';

describe('MelodiediktateMitSekundenComponent', () => {
  let component: MelodiediktateMitSekundenComponent;
  let fixture: ComponentFixture<MelodiediktateMitSekundenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitSekundenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitSekundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
