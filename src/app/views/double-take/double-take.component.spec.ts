import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTakeComponent } from './double-take.component';

describe('DoubleTakeComponent', () => {
  let component: DoubleTakeComponent;
  let fixture: ComponentFixture<DoubleTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
