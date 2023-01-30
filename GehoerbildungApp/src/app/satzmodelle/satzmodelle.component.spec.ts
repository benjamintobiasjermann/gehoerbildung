import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatzmodelleComponent } from './satzmodelle.component';

describe('SatzmodelleComponent', () => {
  let component: SatzmodelleComponent;
  let fixture: ComponentFixture<SatzmodelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatzmodelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatzmodelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
