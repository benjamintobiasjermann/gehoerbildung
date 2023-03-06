import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0213SchubertStreichquartettD46Component } from './hd0213-schubert-streichquartett-d46.component';

describe('Hd0213SchubertStreichquartettD46Component', () => {
  let component: Hd0213SchubertStreichquartettD46Component;
  let fixture: ComponentFixture<Hd0213SchubertStreichquartettD46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0213SchubertStreichquartettD46Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0213SchubertStreichquartettD46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
