import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { ViewSelectedEducationComponent } from './components/view-selected-education/view-selected-education.component';
import { ManageEducationsComponent } from './components/manage-educations/manage-educations.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ListOfParentsComponent } from './components/list-of-parents/list-of-parents.component';
import { ProfilePageStudentComponent } from './components/profile-page-student/profile-page-student.component';
import { ProfilePageParentComponent } from './components/profile-page-parent/profile-page-parent.component';
import { ListOfChildrenComponent } from './components/list-of-children/list-of-children.component';
import { ChildrenPerformanceComponent } from './components/children-performance/children-performance.component';
import { ManageSemestersComponent } from './components/manage-semesters/manage-semesters.component';
import { ManageCoursesComponent } from './components/manage-courses/manage-courses.component';
import { AddNewEducationComponent } from './components/add-new-education/add-new-education.component';

const routes: Routes = [
  { path: 'add-new-course', component: AddNewCourseComponent},
  { path: 'view-selected-education', component: ViewSelectedEducationComponent},
  { path: 'manage-educations', component: ManageEducationsComponent},
  { path: 'performance', component: PerformanceComponent},
  { path: 'list-of-parents', component: ListOfParentsComponent},
  { path: 'profile-page-student', component: ProfilePageStudentComponent},
  { path: 'profile-page-parent', component: ProfilePageParentComponent},
  { path: 'list-of-children', component: ListOfChildrenComponent},
  { path: 'children-performance', component: ChildrenPerformanceComponent},
  { path: 'manage-semesters', component: ManageSemestersComponent},
  { path: 'manage-courses', component: ManageCoursesComponent},
  { path: 'add-new-education', component: AddNewEducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
