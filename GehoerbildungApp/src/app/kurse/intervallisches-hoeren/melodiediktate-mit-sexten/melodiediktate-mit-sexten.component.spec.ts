import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitSextenComponent } from './melodiediktate-mit-sexten.component';

describe('MelodiediktateMitSextenComponent', () => {
  let component: MelodiediktateMitSextenComponent;
  let fixture: ComponentFixture<MelodiediktateMitSextenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitSextenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitSextenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
