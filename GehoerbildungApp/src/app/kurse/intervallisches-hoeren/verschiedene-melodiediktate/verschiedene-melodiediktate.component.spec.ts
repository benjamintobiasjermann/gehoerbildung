import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerschiedeneMelodiediktateComponent } from './verschiedene-melodiediktate.component';

describe('VerschiedeneMelodiediktateComponent', () => {
  let component: VerschiedeneMelodiediktateComponent;
  let fixture: ComponentFixture<VerschiedeneMelodiediktateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerschiedeneMelodiediktateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerschiedeneMelodiediktateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
