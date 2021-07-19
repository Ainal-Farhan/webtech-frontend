import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {
  studentId: number = -1;
  educationId: number = -1;
  semesterId: number = -1;

  status = ['Complete', 'Incomplete'];

  grades: string[] = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'];

  courseForm: Course;

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/courses";

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.courseForm = new Course(
      null,
      '',
      '',
      1,
      1,
      "A+",
      "A+",
      this.semesterId
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentId = params.studentId;
      this.educationId = params.educationId;
      this.semesterId = params.semesterId;

      this.courseForm.fkSemesterId = this.semesterId;
    });
  }
  
  onSubmit() {
    console.log(this.courseForm);
    
    this.http.post(`${this.mainUrl}`, this.courseForm)
    .subscribe({
      next: data => {
        alert("Successfully add new course");
      },
      error: error => {
        if(error.status == 200) {
          alert("Successfully add new course");
        }
        else {
          alert("Failed to add new course");
        }
      }
    });
  }

}
