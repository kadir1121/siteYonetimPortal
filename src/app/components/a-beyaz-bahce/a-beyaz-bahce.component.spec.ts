import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABeyazBahceComponent } from './a-beyaz-bahce.component';

describe('ABeyazBahceComponent', () => {
  let component: ABeyazBahceComponent;
  let fixture: ComponentFixture<ABeyazBahceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABeyazBahceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABeyazBahceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
