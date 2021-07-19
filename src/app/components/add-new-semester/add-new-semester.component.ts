import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Semester } from 'src/app/models/semester';

@Component({
  selector: 'app-add-new-semester',
  templateUrl: './add-new-semester.component.html',
  styleUrls: ['./add-new-semester.component.css']
})
export class AddNewSemesterComponent implements OnInit {

  studentId: number = -1;
  educationId: number = -1;

  status = ['Complete', 'Incomplete'];

  semesterForm: Semester;

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/semesters";

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.semesterForm = new Semester(
      null,
      1,
      1,
      .0,
      .0,
      this.status[0],
      this.educationId
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentId = params.studentId;
      this.educationId = params.educationId;

      this.semesterForm.fkEducationId = this.educationId;
    });
  }
  
  onSubmit() {
    console.log(this.semesterForm);

    let json = JSON.parse(this.semesterForm.toJsonString());
    delete json.id;
    
    this.http.post(`${this.mainUrl}`, this.semesterForm)
    .subscribe({
      next: data => {
        alert("Successfully add new semester");
      },
      error: error => {
        if(error.status == 200) {
          alert("Successfully add new semester");
        }
        else {
          alert("Failed to add new semester");
        }
      }
    });
  }
}
