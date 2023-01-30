import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallischesHoerenComponent } from './intervallisches-hoeren.component';

describe('IntervallischesHoerenComponent', () => {
  let component: IntervallischesHoerenComponent;
  let fixture: ComponentFixture<IntervallischesHoerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallischesHoerenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervallischesHoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
