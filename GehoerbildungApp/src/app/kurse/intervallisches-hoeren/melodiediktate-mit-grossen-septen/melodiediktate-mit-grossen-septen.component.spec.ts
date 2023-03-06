import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitGrossenSeptenComponent } from './melodiediktate-mit-grossen-septen.component';

describe('MelodiediktateMitGrossenSeptenComponent', () => {
  let component: MelodiediktateMitGrossenSeptenComponent;
  let fixture: ComponentFixture<MelodiediktateMitGrossenSeptenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitGrossenSeptenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitGrossenSeptenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
