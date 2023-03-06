import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktateMitValeursAjouteesComponent } from './diktate-mit-valeurs-ajoutees.component';

describe('DiktateMitValeursAjouteesComponent', () => {
  let component: DiktateMitValeursAjouteesComponent;
  let fixture: ComponentFixture<DiktateMitValeursAjouteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiktateMitValeursAjouteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktateMitValeursAjouteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
