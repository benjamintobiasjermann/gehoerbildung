import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0201MozartStreichquartettKv590Component } from './hd0201-mozart-streichquartett-kv590.component';

describe('Hd0201MozartStreichquartettKv590Component', () => {
  let component: Hd0201MozartStreichquartettKv590Component;
  let fixture: ComponentFixture<Hd0201MozartStreichquartettKv590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0201MozartStreichquartettKv590Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0201MozartStreichquartettKv590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
