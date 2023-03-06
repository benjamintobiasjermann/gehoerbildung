import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktateMitUngeradenTaktartenComponent } from './diktate-mit-ungeraden-taktarten.component';

describe('DiktateMitUngeradenTaktartenComponent', () => {
  let component: DiktateMitUngeradenTaktartenComponent;
  let fixture: ComponentFixture<DiktateMitUngeradenTaktartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiktateMitUngeradenTaktartenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktateMitUngeradenTaktartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
