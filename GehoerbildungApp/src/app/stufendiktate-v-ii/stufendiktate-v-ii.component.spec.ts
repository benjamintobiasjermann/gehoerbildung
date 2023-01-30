import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateVIiComponent } from './stufendiktate-v-ii.component';

describe('StufendiktateVIiComponent', () => {
  let component: StufendiktateVIiComponent;
  let fixture: ComponentFixture<StufendiktateVIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateVIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateVIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
