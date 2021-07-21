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

  parentId: number = -1;

  relation: any = undefined;
  parent: any = undefined;
  isUpdates: any = undefined;

  
  // parents: any = [];
  // parentList: number[] = [];

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/relations";
  mainUrlStud: string = "https://managedo-backend.herokuapp.com/api/students";
  mainUrlUser: string = "https://managedo-backend.herokuapp.com/api/users";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.parentId = params.parentId;
    });

    // this.getAllStudentRelationBasedOnId();
    this.getListOfParents();
    this.getAllParentsBasedOnId();
  }

  getListOfParents() {
    // this.http.get(`${this.mainUrl}/fkStudentId/${this.parentId}`).subscribe(data => {
      this.http.get(`${this.mainUrl}/fkStudentId/1`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: StudentRelation[] = [];
      let listUpdate: boolean[] = [];


      list.forEach((json: any) => {
        jsonList.push(StudentRelation.fromJson(json));
        listUpdate.push(false);
      });

      this.relation = jsonList;
      this.isUpdates = listUpdate;

      this.relation.forEach((json: StudentRelation) => {
        console.log(json.toJsonString());
      });

    })
  }


  async getAllParentsBasedOnId() {
    // this.parents = [];

    this.http.get(`${this.mainUrlUser}/fkParentId/1`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: User[] = [];
      let listUpdate: boolean[] = [];


      list.forEach((json: any) => {
        jsonList.push(User.fromJson(json));
        listUpdate.push(false);
      });

      this.parent = jsonList;
      this.isUpdates = listUpdate;

      this.parent.forEach((json: Parent) => {
        console.log(json.toJsonString());
      });

    })

    
  }
 
}
