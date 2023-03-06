import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaereDiktateMitSynkopenComponent } from './binaere-diktate-mit-synkopen.component';

describe('BinaereDiktateMitSynkopenComponent', () => {
  let component: BinaereDiktateMitSynkopenComponent;
  let fixture: ComponentFixture<BinaereDiktateMitSynkopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaereDiktateMitSynkopenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaereDiktateMitSynkopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
