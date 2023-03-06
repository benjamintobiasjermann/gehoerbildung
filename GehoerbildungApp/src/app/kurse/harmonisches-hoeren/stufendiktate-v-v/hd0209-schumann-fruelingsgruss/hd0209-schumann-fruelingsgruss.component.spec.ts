import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0209SchumannFruelingsgrussComponent } from './hd0209-schumann-fruelingsgruss.component';

describe('Hd0209SchumannFruelingsgrussComponent', () => {
  let component: Hd0209SchumannFruelingsgrussComponent;
  let fixture: ComponentFixture<Hd0209SchumannFruelingsgrussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0209SchumannFruelingsgrussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0209SchumannFruelingsgrussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
