import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { ViewSelectedEducationComponent } from './components/view-selected-education/view-selected-education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavBarStudentComponent } from './components/side-nav-bar-student/side-nav-bar-student.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ManageEducationsComponent } from './components/manage-educations/manage-educations.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ListOfParentsComponent } from './components/list-of-parents/list-of-parents.component';
import { SideNavBarParentComponent } from './components/side-nav-bar-parent/side-nav-bar-parent.component';
import { ProfilePageStudentComponent } from './components/profile-page-student/profile-page-student.component';
import { ProfilePageParentComponent } from './components/profile-page-parent/profile-page-parent.component';
import { ListOfChildrenComponent } from './components/list-of-children/list-of-children.component';
import { ChildrenPerformanceComponent } from './components/children-performance/children-performance.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewCourseComponent,
    ViewSelectedEducationComponent,
    SideNavBarStudentComponent,
    ManageEducationsComponent,
    PerformanceComponent,
    ListOfParentsComponent,
    SideNavBarParentComponent,
    ProfilePageStudentComponent,
    ProfilePageParentComponent,
    ListOfChildrenComponent,
    ChildrenPerformanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
