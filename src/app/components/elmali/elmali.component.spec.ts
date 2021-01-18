import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmaliComponent } from './elmali.component';

describe('ElmaliComponent', () => {
  let component: ElmaliComponent;
  let fixture: ComponentFixture<ElmaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
