import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {
  course: Course;  

  constructor() { 
    let json = JSON.parse(
      `{
          "id":1,
          "courseCode":"test123",
          "courseName":"test",
          "section":2,
          "credit":3,
          "targetedGrade":"A",
          "achievedGrade":"A+",
          "fkSemesterId":1
        }`
      );
  
    this.course = new Course(
      json.id,
      json.courseCode,
      json.courseName,
      json.section,
      json.credit,
      json.targetedGrade,
      json.achievedGrade,
      json.fkSemesterId
    );
  }

  ngOnInit(): void {
  }

}
