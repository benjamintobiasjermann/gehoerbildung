import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateUeComponent } from './stufendiktate-ue.component';

describe('StufendiktateUeComponent', () => {
  let component: StufendiktateUeComponent;
  let fixture: ComponentFixture<StufendiktateUeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateUeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
