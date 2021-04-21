import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeNavComponent } from './like-nav.component';

describe('LikeNavComponent', () => {
  let component: LikeNavComponent;
  let fixture: ComponentFixture<LikeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
