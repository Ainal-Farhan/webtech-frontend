import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {
  educationId: number = -1;
  studentId: number = -1;
  semesterId: number = -1;

  courses: any = undefined;
  isUpdates: any = undefined;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/courses";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.educationId = params.educationId;
      this.studentId = params.studentId;
      this.semesterId = params.semesterId;
    });

    this.getListOfCoursesBasedOnSemesterId();
  }

  getListOfCoursesBasedOnSemesterId() {
    this.http.get(`${this.mainUrl}/fkSemesterId/${this.semesterId}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: Course[] = [];
      let listUpdate: boolean[] = [];

      list.forEach((json: any) => {
        jsonList.push(Course.fromJson(json));
        listUpdate.push(false);
      });

      this.courses = jsonList;
      this.isUpdates = listUpdate;

      this.courses.forEach((json: Course) => {
        console.log(json.toJsonString());
      });
    });
  }

  updateSelectedCourse(form: NgForm) {
    let updatedCourse: any = undefined;

    this.courses.forEach((course: Course) => {
      if(course.id == form.value.selectedCourseId) {
        updatedCourse = course;
      }
    });

    if(updatedCourse == undefined) {
      return;
    }

    this.http.put<any>(`${this.mainUrl}/${updatedCourse.id}`, 
      JSON.parse(
        updatedCourse.toJsonString()
      ))
      .subscribe(data => {
        alert(data.message);
        this.ngOnInit();
      });
  }

  setToCancelUpdate(index: number) {
    this.isUpdates[index] = false;
    this.ngOnInit();
  }

  setToUpdate(index: number) {
    this.isUpdates[index] = true;
  }

  deleteSelectedCourse(courseId: number) {
    if(confirm("Are you sure to delete the course information?")) {
      this.http.delete<any>(`${this.mainUrl}/${courseId}`)
        .subscribe( data => {
          alert(data.message);
          this.ngOnInit();
        }
      );
    }
  }
}
