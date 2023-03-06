import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0210SchumannVierHusarenliederComponent } from './hd0210-schumann-vier-husarenlieder.component';

describe('Hd0210SchumannVierHusarenliederComponent', () => {
  let component: Hd0210SchumannVierHusarenliederComponent;
  let fixture: ComponentFixture<Hd0210SchumannVierHusarenliederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0210SchumannVierHusarenliederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0210SchumannVierHusarenliederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
