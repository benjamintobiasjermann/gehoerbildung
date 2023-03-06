import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitTritoniComponent } from './melodiediktate-mit-tritoni.component';

describe('MelodiediktateMitTritoniComponent', () => {
  let component: MelodiediktateMitTritoniComponent;
  let fixture: ComponentFixture<MelodiediktateMitTritoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitTritoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitTritoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
