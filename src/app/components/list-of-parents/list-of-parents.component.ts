import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Parent } from 'src/app/models/parent';
import { Student } from 'src/app/models/student';
import { StudentRelation } from 'src/app/models/studentRelation';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-of-parents',
  templateUrl: './list-of-parents.component.html',
  styleUrls: ['./list-of-parents.component.css']
})
export class ListOfParentsComponent implements OnInit {

  studentId: number = -1;

  relation: any = undefined;
  parent: any = undefined;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/relations";
  mainUrlStud: string = "https://managedo-backend.herokuapp.com/api/students";
  mainUrlUser: string = "https://managedo-backend.herokuapp.com/api/users";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    // get the student id from local storage
    this.studentId =  JSON.parse(localStorage.getItem('currentUser') || '{"studentId":null}').studentId;

    this.getListOfParents();
  }

  async getListOfParents() {
    this.http.get(`${this.mainUrl}/fkStudentId/${this.studentId}`).subscribe(async(data: any) => {
      let list: any = data;

      if(data === []) return;

      let jsonList: StudentRelation[] = [];
      let listUpdate: boolean[] = [];


      list.forEach((json: any) => {
        jsonList.push(StudentRelation.fromJson(json));
        listUpdate.push(false);
      });

      this.relation = jsonList;

      this.parent = [];

      await Promise.all(this.relation.map(
        (relate: StudentRelation) => {
          this.http.get(`${this.mainUrlUser}/fkParentId/${relate.fkParentId}`).subscribe(
            (data: any) => {    
              if(data === []) return;
              
              this.parent.push(User.fromJson(data[0]));
              console.log(data[0]);
            }
          )
        }
      ));

    })
  } 
}
