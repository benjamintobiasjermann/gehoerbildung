import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelismusSequenzComponent } from './parallelismus-sequenz.component';

describe('ParallelismusSequenzComponent', () => {
  let component: ParallelismusSequenzComponent;
  let fixture: ComponentFixture<ParallelismusSequenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelismusSequenzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelismusSequenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
