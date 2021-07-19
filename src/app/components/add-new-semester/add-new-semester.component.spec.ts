import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSemesterComponent } from './add-new-semester.component';

describe('AddNewSemesterComponent', () => {
  let component: AddNewSemesterComponent;
  let fixture: ComponentFixture<AddNewSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSemesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
