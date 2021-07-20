import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationChartListComponent } from './education-chart-list.component';

describe('EducationChartListComponent', () => {
  let component: EducationChartListComponent;
  let fixture: ComponentFixture<EducationChartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationChartListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationChartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
