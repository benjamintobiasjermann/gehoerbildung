import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktateMitSchnellenNotenwertenComponent } from './diktate-mit-schnellen-notenwerten.component';

describe('DiktateMitSchnellenNotenwertenComponent', () => {
  let component: DiktateMitSchnellenNotenwertenComponent;
  let fixture: ComponentFixture<DiktateMitSchnellenNotenwertenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiktateMitSchnellenNotenwertenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktateMitSchnellenNotenwertenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
