import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Student } from 'src/app/models/student';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-page-student',
  templateUrl: './profile-page-student.component.html',
  styleUrls: ['./profile-page-student.component.css']
})
export class ProfilePageStudentComponent implements OnInit {
  studentId: number = -1;
  student: any = undefined;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // get the student id from local storage
    this.studentId =  JSON.parse(localStorage.getItem('currentUser') || '{"studentId":null}').studentId;
    
    this.http.get(`${environment.apiUrl}/students/${this.studentId}`).subscribe(
      (dataStd: any) => {
        this.http.get(`${environment.apiUrl}/users/fkStudentId/${this.studentId}`).subscribe(
          (data: any) => {
            let usr = data[0];
            let std = dataStd;
            std.user = usr;
    
            this.student = Student.fromJson(std);
    
            console.log(this.student);
          }
        );
      }
    );
  }
}
