import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsBeyazBahceComponent } from './ys-beyaz-bahce.component';

describe('YsBeyazBahceComponent', () => {
  let component: YsBeyazBahceComponent;
  let fixture: ComponentFixture<YsBeyazBahceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YsBeyazBahceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YsBeyazBahceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
