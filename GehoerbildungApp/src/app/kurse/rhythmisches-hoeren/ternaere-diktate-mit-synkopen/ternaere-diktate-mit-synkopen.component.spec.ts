import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TernaereDiktateMitSynkopenComponent } from './ternaere-diktate-mit-synkopen.component';

describe('TernaereDiktateMitSynkopenComponent', () => {
  let component: TernaereDiktateMitSynkopenComponent;
  let fixture: ComponentFixture<TernaereDiktateMitSynkopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TernaereDiktateMitSynkopenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TernaereDiktateMitSynkopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
