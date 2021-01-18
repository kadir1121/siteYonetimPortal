import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGreenComponent } from './a-green.component';

describe('AGreenComponent', () => {
  let component: AGreenComponent;
  let fixture: ComponentFixture<AGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
