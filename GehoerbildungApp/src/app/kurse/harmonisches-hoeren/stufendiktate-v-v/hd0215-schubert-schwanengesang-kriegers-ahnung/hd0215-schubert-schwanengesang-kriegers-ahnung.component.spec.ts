import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd0215SchubertSchwanengesangKriegersAhnungComponent } from './hd0215-schubert-schwanengesang-kriegers-ahnung.component';

describe('Hd0215SchubertSchwanengesangKriegersAhnungComponent', () => {
  let component: Hd0215SchubertSchwanengesangKriegersAhnungComponent;
  let fixture: ComponentFixture<Hd0215SchubertSchwanengesangKriegersAhnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hd0215SchubertSchwanengesangKriegersAhnungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd0215SchubertSchwanengesangKriegersAhnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
