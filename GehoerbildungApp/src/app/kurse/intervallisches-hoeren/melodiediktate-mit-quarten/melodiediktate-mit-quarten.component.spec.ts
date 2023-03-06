import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitQuartenComponent } from './melodiediktate-mit-quarten.component';

describe('MelodiediktateMitQuartenComponent', () => {
  let component: MelodiediktateMitQuartenComponent;
  let fixture: ComponentFixture<MelodiediktateMitQuartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitQuartenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitQuartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
