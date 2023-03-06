import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MollLeitereigenComponent } from './moll-leitereigen.component';

describe('MollLeitereigenComponent', () => {
  let component: MollLeitereigenComponent;
  let fixture: ComponentFixture<MollLeitereigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MollLeitereigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MollLeitereigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
