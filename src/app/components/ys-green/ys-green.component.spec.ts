import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsGreenComponent } from './ys-green.component';

describe('YsGreenComponent', () => {
  let component: YsGreenComponent;
  let fixture: ComponentFixture<YsGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YsGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YsGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
