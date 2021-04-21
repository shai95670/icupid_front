import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTakeNavComponent } from './double-take-nav.component';

describe('DoubleTakeNavComponent', () => {
  let component: DoubleTakeNavComponent;
  let fixture: ComponentFixture<DoubleTakeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleTakeNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleTakeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
