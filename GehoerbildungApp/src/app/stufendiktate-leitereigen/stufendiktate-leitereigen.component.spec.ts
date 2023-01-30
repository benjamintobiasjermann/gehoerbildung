import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateLeitereigenComponent } from './stufendiktate-leitereigen.component';

describe('StufendiktateLeitereigenComponent', () => {
  let component: StufendiktateLeitereigenComponent;
  let fixture: ComponentFixture<StufendiktateLeitereigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateLeitereigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateLeitereigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
