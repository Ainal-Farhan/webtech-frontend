import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-add-new-education',
  templateUrl: './add-new-education.component.html',
  styleUrls: ['./add-new-education.component.css']
})
export class AddNewEducationComponent implements OnInit {
  studentId: number = -1;

  degreeLevels = ['PhD', 'Master', 'Bachelor', 'Degree', 'Diploma'];

  educationForm: Education;

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/educations";

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { 
    this.educationForm = new Education(
      null,
      '',
      '',
      this.degreeLevels[0],
      new Date().toISOString().substring(0, 10),
      3.67,
      3.67,
      this.studentId  
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentId = params.studentId;

      this.educationForm.fkStudentId = this.studentId;
    });
  }

  onSubmit() {
    console.log(this.educationForm);
    
    this.http.post(`${this.mainUrl}`, JSON.parse(this.educationForm.toJsonString()))
    .subscribe({
      next: data => {
        alert("Successfully add new education");
      },
      error: error => {
        if(error.status == 200) {
          alert("Successfully add new education");
        }
        else {
          alert("Failed to add new education");
        }
      }
    });
  }
}
