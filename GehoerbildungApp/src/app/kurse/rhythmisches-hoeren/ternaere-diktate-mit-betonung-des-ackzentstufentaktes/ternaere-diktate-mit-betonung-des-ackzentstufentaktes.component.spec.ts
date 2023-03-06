import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TernaereDiktateMitBetonungDesAckzentstufentaktesComponent } from './ternaere-diktate-mit-betonung-des-ackzentstufentaktes.component';

describe('TernaereDiktateMitBetonungDesAckzentstufentaktesComponent', () => {
  let component: TernaereDiktateMitBetonungDesAckzentstufentaktesComponent;
  let fixture: ComponentFixture<TernaereDiktateMitBetonungDesAckzentstufentaktesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TernaereDiktateMitBetonungDesAckzentstufentaktesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TernaereDiktateMitBetonungDesAckzentstufentaktesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
