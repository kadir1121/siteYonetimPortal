import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AElmaliComponent } from './a-elmali.component';

describe('AElmaliComponent', () => {
  let component: AElmaliComponent;
  let fixture: ComponentFixture<AElmaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AElmaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AElmaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
