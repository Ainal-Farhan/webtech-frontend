import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEducationsComponent } from './manage-educations.component';

describe('ManageEducationsComponent', () => {
  let component: ManageEducationsComponent;
  let fixture: ComponentFixture<ManageEducationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEducationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEducationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
