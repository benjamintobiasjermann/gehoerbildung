import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateVVComponent } from './stufendiktate-v-v.component';

describe('StufendiktateVVComponent', () => {
  let component: StufendiktateVVComponent;
  let fixture: ComponentFixture<StufendiktateVVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateVVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateVVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
