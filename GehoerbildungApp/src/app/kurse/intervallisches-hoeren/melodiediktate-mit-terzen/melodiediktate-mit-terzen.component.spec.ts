import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiediktateMitTerzenComponent } from './melodiediktate-mit-terzen.component';

describe('MelodiediktateMitTerzenComponent', () => {
  let component: MelodiediktateMitTerzenComponent;
  let fixture: ComponentFixture<MelodiediktateMitTerzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiediktateMitTerzenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiediktateMitTerzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
