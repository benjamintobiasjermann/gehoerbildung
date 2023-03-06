import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhythmischesHoerenComponent } from './rhythmisches-hoeren.component';

describe('RhythmischesHoerenComponent', () => {
  let component: RhythmischesHoerenComponent;
  let fixture: ComponentFixture<RhythmischesHoerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhythmischesHoerenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhythmischesHoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
