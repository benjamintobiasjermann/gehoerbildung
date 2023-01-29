import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktatComponent } from './diktat.component';

describe('DiktatComponent', () => {
  let component: DiktatComponent;
  let fixture: ComponentFixture<DiktatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiktatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
