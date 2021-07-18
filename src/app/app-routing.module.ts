import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { ViewSelectedEducationComponent } from './components/view-selected-education/view-selected-education.component';

const routes: Routes = [
  { path: 'add-new-course', component: AddNewCourseComponent},
  { path: 'view-selected-education', component: ViewSelectedEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
