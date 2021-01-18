import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitelerComponent } from './siteler.component';

describe('SitelerComponent', () => {
  let component: SitelerComponent;
  let fixture: ComponentFixture<SitelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
