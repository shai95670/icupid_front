import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackMenueComponent } from './stack-menue.component';

describe('StackMenueComponent', () => {
  let component: StackMenueComponent;
  let fixture: ComponentFixture<StackMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackMenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
