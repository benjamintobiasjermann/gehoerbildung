import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrachordModelleComponent } from './tetrachord-modelle.component';

describe('TetrachordModelleComponent', () => {
  let component: TetrachordModelleComponent;
  let fixture: ComponentFixture<TetrachordModelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetrachordModelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetrachordModelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
