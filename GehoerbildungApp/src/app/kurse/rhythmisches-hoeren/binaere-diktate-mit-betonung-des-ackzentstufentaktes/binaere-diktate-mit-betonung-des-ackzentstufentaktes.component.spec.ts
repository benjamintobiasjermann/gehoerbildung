import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaereDiktateMitBetonungDesAckzentstufentaktesComponent } from './binaere-diktate-mit-betonung-des-ackzentstufentaktes.component';

describe('BinaereDiktateMitBetonungDesAckzentstufentaktesComponent', () => {
  let component: BinaereDiktateMitBetonungDesAckzentstufentaktesComponent;
  let fixture: ComponentFixture<BinaereDiktateMitBetonungDesAckzentstufentaktesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaereDiktateMitBetonungDesAckzentstufentaktesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaereDiktateMitBetonungDesAckzentstufentaktesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
