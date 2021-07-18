import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { ViewSelectedEducationComponent } from './components/view-selected-education/view-selected-education.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewCourseComponent,
    ViewSelectedEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
