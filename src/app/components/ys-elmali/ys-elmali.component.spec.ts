import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsElmaliComponent } from './ys-elmali.component';

describe('YsElmaliComponent', () => {
  let component: YsElmaliComponent;
  let fixture: ComponentFixture<YsElmaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YsElmaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YsElmaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
