import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateNComponent } from './stufendiktate-n.component';

describe('StufendiktateNComponent', () => {
  let component: StufendiktateNComponent;
  let fixture: ComponentFixture<StufendiktateNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
