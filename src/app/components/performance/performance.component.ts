import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  studentId: number = -1;
  mainUrl: string = "https://managedo-backend.herokuapp.com/api/educations";
  educations: any = [];
  selectedEducation!: any;
  searched: any = undefined;

  myForm!: FormGroup;

  constructor(private route: ActivatedRoute, private http: HttpClient, public fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      education: ['', [Validators.required]]
    });

    this.route.queryParams.subscribe(params => {
      this.studentId = params.id;
    });
    console.log(this.studentId);

    this.getEducationBasedOnId();
  }

  getEducationId(): any {
    return this.selectedEducation;
  }

  getEducationBasedOnId(): void {
    this.http.get(`${this.mainUrl}/fkStudentId/${this.studentId}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: Education[] = [];

      list.forEach((json: any) => {
        jsonList.push(Education.fromJson(json));
      });

      this.educations = jsonList;
    });
  }

  onSubmit() {
    this.searched = true;
    this.selectedEducation = this.myForm.controls['education'].value;
  }

}
