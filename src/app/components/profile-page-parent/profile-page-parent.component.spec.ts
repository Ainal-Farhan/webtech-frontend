import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageParentComponent } from './profile-page-parent.component';

describe('ProfilePageParentComponent', () => {
  let component: ProfilePageParentComponent;
  let fixture: ComponentFixture<ProfilePageParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
