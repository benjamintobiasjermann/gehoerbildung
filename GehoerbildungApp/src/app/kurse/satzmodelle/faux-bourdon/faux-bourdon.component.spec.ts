import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxBourdonComponent } from './faux-bourdon.component';

describe('FauxBourdonComponent', () => {
  let component: FauxBourdonComponent;
  let fixture: ComponentFixture<FauxBourdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FauxBourdonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FauxBourdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
