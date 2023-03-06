import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0214BrahmsDerVerratComponent } from './hd0214-brahms-der-verrat.component';

describe('Hd0214BrahmsDerVerratComponent', () => {
  let component: Hd0214BrahmsDerVerratComponent;
  let fixture: ComponentFixture<Hd0214BrahmsDerVerratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0214BrahmsDerVerratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0214BrahmsDerVerratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
