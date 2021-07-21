import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentRelation } from 'src/app/models/studentRelation';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-list-of-children',
  templateUrl: './list-of-children.component.html',
  styleUrls: ['./list-of-children.component.css']
})
export class ListOfChildrenComponent implements OnInit {

  parentId: number = -1;

  student: any = undefined;
  isUpdates: any = undefined;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  mainUrlStud: string = "https://managedo-backend.herokuapp.com/api/students";
  mainUrlUser: string = "https://managedo-backend.herokuapp.com/api/users";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    // get the parent id from local storage
    this.parentId =  JSON.parse(localStorage.getItem('currentUser') || '{"parentId":null}').parentId;

    // this.getAllStudentRelationBasedOnId();
    this.getListOfStudents();
  }

  getListOfStudents() {
    this.http.get(`${this.mainUrlUser}/fkStudentId/${this.parentId}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: User[] = [];
      let listUpdate: boolean[] = [];


      list.forEach((json: any) => {
        jsonList.push(User.fromJson(json));
        listUpdate.push(false);
      });

      this.student = jsonList;
      this.isUpdates = listUpdate;

      this.student.forEach((json: User) => {
        console.log(json.toJsonString());
      });

    })
  }


}
