import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateVIvComponent } from './stufendiktate-v-iv.component';

describe('StufendiktateVIvComponent', () => {
  let component: StufendiktateVIvComponent;
  let fixture: ComponentFixture<StufendiktateVIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateVIvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateVIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
