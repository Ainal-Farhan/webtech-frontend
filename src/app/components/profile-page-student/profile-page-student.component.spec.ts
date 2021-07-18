import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageStudentComponent } from './profile-page-student.component';

describe('ProfilePageStudentComponent', () => {
  let component: ProfilePageStudentComponent;
  let fixture: ComponentFixture<ProfilePageStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
