import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnurkentComponent } from './onurkent.component';

describe('OnurkentComponent', () => {
  let component: OnurkentComponent;
  let fixture: ComponentFixture<OnurkentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnurkentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnurkentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
