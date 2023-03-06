import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweistimmigeParallelfuehrungComponent } from './zweistimmige.parallelfuehrung.component';

describe('ZweistimmigeParallelfuehrungComponent', () => {
  let component: ZweistimmigeParallelfuehrungComponent;
  let fixture: ComponentFixture<ZweistimmigeParallelfuehrungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweistimmigeParallelfuehrungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZweistimmigeParallelfuehrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
