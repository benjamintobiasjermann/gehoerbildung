import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0203HaydnSonateHobXVIComponent } from './hd0203-haydn-sonate-hob.xvi.component';

describe('Hd0203HaydnSonateHobXVIComponent', () => {
  let component: Hd0203HaydnSonateHobXVIComponent;
  let fixture: ComponentFixture<Hd0203HaydnSonateHobXVIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0203HaydnSonateHobXVIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0203HaydnSonateHobXVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
