import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0207BeethovenKlavierkonzertNr5Component } from './hd0207-beethoven-klavierkonzert-nr5.component';

describe('Hd0207BeethovenKlavierkonzertNr5Component', () => {
  let component: Hd0207BeethovenKlavierkonzertNr5Component;
  let fixture: ComponentFixture<Hd0207BeethovenKlavierkonzertNr5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0207BeethovenKlavierkonzertNr5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0207BeethovenKlavierkonzertNr5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
