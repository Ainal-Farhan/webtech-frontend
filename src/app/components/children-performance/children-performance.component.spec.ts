import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenPerformanceComponent } from './children-performance.component';

describe('ChildrenPerformanceComponent', () => {
  let component: ChildrenPerformanceComponent;
  let fixture: ComponentFixture<ChildrenPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
