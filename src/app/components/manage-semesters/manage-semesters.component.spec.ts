import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSemestersComponent } from './manage-semesters.component';

describe('ManageSemestersComponent', () => {
  let component: ManageSemestersComponent;
  let fixture: ComponentFixture<ManageSemestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSemestersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSemestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
