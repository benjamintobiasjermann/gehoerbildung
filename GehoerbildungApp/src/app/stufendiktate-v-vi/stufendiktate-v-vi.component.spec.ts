import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateVViComponent } from './stufendiktate-v-vi.component';

describe('StufendiktateVViComponent', () => {
  let component: StufendiktateVViComponent;
  let fixture: ComponentFixture<StufendiktateVViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateVViComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateVViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
