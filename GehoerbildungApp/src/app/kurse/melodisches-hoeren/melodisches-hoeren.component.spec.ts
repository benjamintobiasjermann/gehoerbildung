import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodischesHoerenComponent } from './melodisches-hoeren.component';

describe('MelodischesHoerenComponent', () => {
  let component: MelodischesHoerenComponent;
  let fixture: ComponentFixture<MelodischesHoerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodischesHoerenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodischesHoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
