import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/education';
import { Student } from 'src/app/models/student';
import { StudentRelation } from 'src/app/models/studentRelation';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-children-performance',
  templateUrl: './children-performance.component.html',
  styleUrls: ['./children-performance.component.css']
})
export class ChildrenPerformanceComponent implements OnInit {
  parentId: number = -1;
  students: any = [];
  educations: any = [];
  studentsIdList: number[] = [];
  myForm!: FormGroup;
  value: any;
  searched: any = undefined;
  selectedEducation!: any;

  mainUrlEdu: string = "https://managedo-backend.herokuapp.com/api/educations";
  mainUrlStud: string = "https://managedo-backend.herokuapp.com/api/students";
  mainUrlRel: string = "https://managedo-backend.herokuapp.com/api/relations";
  mainUrlUser: string = "https://managedo-backend.herokuapp.com/api/users";


  constructor(private route: ActivatedRoute, private http: HttpClient, public fb: FormBuilder) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.parentId = params.id;
    });

    this.myForm = this.fb.group({
      student: ['', [Validators.required]],
      education: ['', [Validators.required]],
    })

    this.getAllStudentRelationBasedOnId();
  }

  getAllStudentRelationBasedOnId(): void {
    this.http.get(`${this.mainUrlRel}/fkParentId/${this.parentId}`).subscribe(async (data) => {
      let list: any = data;

      if(data == []) return;

      let jsonList: any = [];

      list.forEach((json: any) => {
        jsonList.push(json.fkStudentId);
      });

      this.studentsIdList = jsonList;
      await this.getAllStudentBasedOnId();

      console.log(this.students);
    });
  }

  getAllEducationBasedOnId(id: number): void {
    this.http.get(`${this.mainUrlEdu}/fkStudentId/${id}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: Education[] = [];

      list.forEach((json: any) => {
        jsonList.push(Education.fromJson(json));
      });

      this.educations = jsonList;
    })
  }

  async getAllStudentBasedOnId(): Promise<any> {
    this.students = [];

    await Promise.all(this.studentsIdList.map((element) => {
      this.http.get(`${this.mainUrlStud}/${element}`).subscribe((data: any) => {

        this.http.get(`${this.mainUrlUser}/fkStudentId/${element}`).subscribe((data2: any) => {

          if(data === null) return;
          data.user = data2[0];

          console.log(data);
          this.students.push(Student.fromJson(data));
        });
      });
    }));
  }

  getEducationId(): number {
    return this.selectedEducation;
  }

  onChanged(deviceValue: any) {
    console.log(deviceValue);
    this.getAllEducationBasedOnId(deviceValue);
  }

  onSubmit() {
    this.searched = true;
    this.selectedEducation = this.myForm.controls['education'].value;
  }
}
