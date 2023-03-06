import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0205MozartSerenadeKv388Component } from './hd0205-mozart-serenade-kv388.component';

describe('Hd0205MozartSerenadeKv388Component', () => {
  let component: Hd0205MozartSerenadeKv388Component;
  let fixture: ComponentFixture<Hd0205MozartSerenadeKv388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0205MozartSerenadeKv388Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0205MozartSerenadeKv388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
