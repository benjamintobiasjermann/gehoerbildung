import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0200KlavierdiktateComponent } from './hd0200-klavierdiktate.component';

describe('Hd0200KlavierdiktateComponent', () => {
  let component: Hd0200KlavierdiktateComponent;
  let fixture: ComponentFixture<Hd0200KlavierdiktateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0200KlavierdiktateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0200KlavierdiktateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
