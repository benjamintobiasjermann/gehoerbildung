import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurLeitereigenComponent } from './dur-leitereigen.component';

describe('DurLeitereigenComponent', () => {
  let component: DurLeitereigenComponent;
  let fixture: ComponentFixture<DurLeitereigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurLeitereigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurLeitereigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
