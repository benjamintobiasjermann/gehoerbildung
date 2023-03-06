import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonischesHoerenComponent } from './harmonisches-hoeren.component';

describe('HarmonischesHoerenComponent', () => {
  let component: HarmonischesHoerenComponent;
  let fixture: ComponentFixture<HarmonischesHoerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmonischesHoerenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmonischesHoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
