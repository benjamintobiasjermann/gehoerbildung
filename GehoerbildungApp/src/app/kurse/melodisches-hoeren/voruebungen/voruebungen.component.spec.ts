import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoruebungenComponent } from './voruebungen.component';

describe('VoruebungenComponent', () => {
  let component: VoruebungenComponent;
  let fixture: ComponentFixture<VoruebungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoruebungenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoruebungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
