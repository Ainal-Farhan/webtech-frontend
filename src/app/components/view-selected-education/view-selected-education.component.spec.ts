import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedEducationComponent } from './view-selected-education.component';

describe('ViewSelectedEducationComponent', () => {
  let component: ViewSelectedEducationComponent;
  let fixture: ComponentFixture<ViewSelectedEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelectedEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
