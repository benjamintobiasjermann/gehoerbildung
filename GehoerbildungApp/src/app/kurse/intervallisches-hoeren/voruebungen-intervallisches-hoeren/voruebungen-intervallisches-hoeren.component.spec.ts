import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoruebungenIntervallischesHoerenComponent } from './voruebungen-intervallisches-hoeren.component';

describe('VoruebungenIntervallischesHoerenComponent', () => {
  let component: VoruebungenIntervallischesHoerenComponent;
  let fixture: ComponentFixture<VoruebungenIntervallischesHoerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoruebungenIntervallischesHoerenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoruebungenIntervallischesHoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
