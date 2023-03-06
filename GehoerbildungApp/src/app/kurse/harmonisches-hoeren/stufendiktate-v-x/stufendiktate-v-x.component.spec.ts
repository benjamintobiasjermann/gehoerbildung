import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateVXComponent } from './stufendiktate-v-x.component';

describe('StufendiktateVXComponent', () => {
  let component: StufendiktateVXComponent;
  let fixture: ComponentFixture<StufendiktateVXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateVXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateVXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
