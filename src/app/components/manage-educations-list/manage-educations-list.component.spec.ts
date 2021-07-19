import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEducationsListComponent } from './manage-educations-list.component';

describe('ManageEducationsListComponent', () => {
  let component: ManageEducationsListComponent;
  let fixture: ComponentFixture<ManageEducationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEducationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEducationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
