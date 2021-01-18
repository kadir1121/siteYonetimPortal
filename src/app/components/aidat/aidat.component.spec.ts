import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidatComponent } from './aidat.component';

describe('AidatComponent', () => {
  let component: AidatComponent;
  let fixture: ComponentFixture<AidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
