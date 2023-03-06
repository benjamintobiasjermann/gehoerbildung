import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteigendeSequenzenComponent } from './steigende-sequenzen.component';

describe('SteigendeSequenzenComponent', () => {
  let component: SteigendeSequenzenComponent;
  let fixture: ComponentFixture<SteigendeSequenzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteigendeSequenzenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteigendeSequenzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
