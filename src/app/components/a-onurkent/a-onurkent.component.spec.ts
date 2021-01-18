import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOnurkentComponent } from './a-onurkent.component';

describe('AOnurkentComponent', () => {
  let component: AOnurkentComponent;
  let fixture: ComponentFixture<AOnurkentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOnurkentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AOnurkentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
