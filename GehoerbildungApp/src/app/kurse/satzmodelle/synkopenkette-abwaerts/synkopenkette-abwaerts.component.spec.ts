import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynkopenketteAbwaertsComponent } from './synkopenkette-abwaerts.component';

describe('SynkopenketteAbwaertsComponent', () => {
  let component: SynkopenketteAbwaertsComponent;
  let fixture: ComponentFixture<SynkopenketteAbwaertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynkopenketteAbwaertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynkopenketteAbwaertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
