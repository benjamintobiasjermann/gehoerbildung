import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktateMitWechselndenTaktartenComponent } from './diktate-mit-wechselnden-taktarten.component';

describe('DiktateMitWechselndenTaktartenComponent', () => {
  let component: DiktateMitWechselndenTaktartenComponent;
  let fixture: ComponentFixture<DiktateMitWechselndenTaktartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiktateMitWechselndenTaktartenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktateMitWechselndenTaktartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
