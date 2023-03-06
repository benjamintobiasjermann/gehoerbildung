import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurMollAnspruchsvolleDiktateComponent } from './dur-moll-anspruchsvolle-diktate.component';

describe('DurMollAnspruchsvolleDiktateComponent', () => {
  let component: DurMollAnspruchsvolleDiktateComponent;
  let fixture: ComponentFixture<DurMollAnspruchsvolleDiktateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurMollAnspruchsvolleDiktateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurMollAnspruchsvolleDiktateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
