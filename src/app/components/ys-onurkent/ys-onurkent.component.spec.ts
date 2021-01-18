import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsOnurkentComponent } from './ys-onurkent.component';

describe('YsOnurkentComponent', () => {
  let component: YsOnurkentComponent;
  let fixture: ComponentFixture<YsOnurkentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YsOnurkentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YsOnurkentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
