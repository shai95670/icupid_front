import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCardListComponent } from './like-card-list.component';

describe('LikeCardListComponent', () => {
  let component: LikeCardListComponent;
  let fixture: ComponentFixture<LikeCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
