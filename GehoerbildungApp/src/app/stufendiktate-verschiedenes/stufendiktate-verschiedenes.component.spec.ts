import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StufendiktateVerschiedenesComponent } from './stufendiktate-verschiedenes.component';

describe('StufendiktateVerschiedenesComponent', () => {
  let component: StufendiktateVerschiedenesComponent;
  let fixture: ComponentFixture<StufendiktateVerschiedenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StufendiktateVerschiedenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StufendiktateVerschiedenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
