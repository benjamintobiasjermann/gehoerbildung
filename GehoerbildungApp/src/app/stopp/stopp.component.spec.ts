import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppComponent } from './stopp.component';

describe('StoppComponent', () => {
  let component: StoppComponent;
  let fixture: ComponentFixture<StoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
