import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { HttpClient } from '@angular/common/http';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-educations-list',
  templateUrl: './manage-educations-list.component.html',
  styleUrls: ['./manage-educations-list.component.css']
})
export class ManageEducationsListComponent implements OnInit {
  @Input()
  id: number = -1;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  educations: any = undefined;
  isUpdates: any = undefined;

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/educations";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.educations = undefined;
    this.isUpdates = undefined;
    this.getListOfEducationsBasedOnStudentId();
  }

  getListOfEducationsBasedOnStudentId() {
    this.http.get(`${this.mainUrl}/fkStudentId/${this.id}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: Education[] = [];
      let listUpdate: boolean[] = [];

      list.forEach((json: any) => {
        jsonList.push(Education.fromJson(json));
        listUpdate.push(false);
      });

      this.educations = jsonList;
      this.isUpdates = listUpdate;

      this.educations.forEach((json: Education) => {
        console.log(json.toJsonString());
      });
    });
  }

  updateSelectedEducation(form: NgForm) {
    let updatedEducation: any = undefined;

    this.educations.forEach((education: Education) => {
      if(education.id == form.value.selectedEducationId) {
        updatedEducation = education;
      }
    });

    if(updatedEducation == undefined) {
      return;
    }

    this.http.put<any>(`${this.mainUrl}/${updatedEducation.id}`, 
      JSON.parse(
        updatedEducation.toJsonString()
      ))
      .subscribe(data => {
        alert(data.message);
        this.ngOnInit();
      });
  }

  deleteSelectedEducation(educationId: number) {
    if(confirm("Are you sure to delete the education information?")) {
      this.http.delete<any>(`${this.mainUrl}/${educationId}`)
        .subscribe( data => {
          alert(data.message);
          this.ngOnInit();
        }
      );
    }
  }

  setToUpdate(index: number) {
    this.isUpdates[index] = true;
  }

  setToCancelUpdate(index: number) {
    this.isUpdates[index] = false;
  }
}
