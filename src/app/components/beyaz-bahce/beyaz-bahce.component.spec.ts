import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyazBahceComponent } from './beyaz-bahce.component';

describe('BeyazBahceComponent', () => {
  let component: BeyazBahceComponent;
  let fixture: ComponentFixture<BeyazBahceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeyazBahceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyazBahceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
