import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktateMitPolyrhythmenUndpolymetrenComponent } from './diktate-mit-polyrhythmen-undpolymetren.component';

describe('DiktateMitPolyrhythmenUndpolymetrenComponent', () => {
  let component: DiktateMitPolyrhythmenUndpolymetrenComponent;
  let fixture: ComponentFixture<DiktateMitPolyrhythmenUndpolymetrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiktateMitPolyrhythmenUndpolymetrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktateMitPolyrhythmenUndpolymetrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
