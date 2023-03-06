import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitQuintenComponent } from './melodiediktate-mit-quinten.component';

describe('MelodiediktateMitQuintenComponent', () => {
  let component: MelodiediktateMitQuintenComponent;
  let fixture: ComponentFixture<MelodiediktateMitQuintenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitQuintenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitQuintenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
