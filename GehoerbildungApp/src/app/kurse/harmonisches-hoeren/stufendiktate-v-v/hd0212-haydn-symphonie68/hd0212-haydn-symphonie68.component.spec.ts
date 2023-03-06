import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0212HaydnSymphonie68Component } from './hd0212-haydn-symphonie68.component';

describe('Hd0212HaydnSymphonie68Component', () => {
  let component: Hd0212HaydnSymphonie68Component;
  let fixture: ComponentFixture<Hd0212HaydnSymphonie68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0212HaydnSymphonie68Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0212HaydnSymphonie68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
