import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintfallSequenzenComponent } from './quintfall-sequenzen.component';

describe('QuintfallSequenzenComponent', () => {
  let component: QuintfallSequenzenComponent;
  let fixture: ComponentFixture<QuintfallSequenzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuintfallSequenzenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintfallSequenzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
