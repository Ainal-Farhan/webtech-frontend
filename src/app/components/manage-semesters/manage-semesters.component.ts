import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Semester } from 'src/app/models/semester';

@Component({
  selector: 'app-manage-semesters',
  templateUrl: './manage-semesters.component.html',
  styleUrls: ['./manage-semesters.component.css']
})
export class ManageSemestersComponent implements OnInit {
  educationId: number = -1;

  semesters: any = undefined;
  isUpdates: any = undefined;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/semesters";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.educationId = params.educationId;
    });

    this.getListOfSemestersBasedOnEducationId();
  }

  getListOfSemestersBasedOnEducationId() {
    this.http.get(`${this.mainUrl}/fkEducationId/${this.educationId}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: Semester[] = [];
      let listUpdate: boolean[] = [];

      list.forEach((json: any) => {
        jsonList.push(Semester.fromJson(json));
        listUpdate.push(false);
      });

      this.semesters = jsonList;
      this.isUpdates = listUpdate;

      this.semesters.forEach((json: Semester) => {
        console.log(json.toJsonString());
      });
    });
  }

  updateSelectedSemester(form: NgForm) {
    let updatedSemester: any = undefined;

    this.semesters.forEach((semester: Semester) => {
      if(semester.id == form.value.selectedSemesterId) {
        updatedSemester = semester;
      }
    });

    if(updatedSemester == undefined) {
      return;
    }

    this.http.put<any>(`${this.mainUrl}/${updatedSemester.id}`, 
      JSON.parse(
        updatedSemester.toJsonString()
      ))
      .subscribe(data => {
        alert(data.message);
        this.ngOnInit();
      });
  }

  setToCancelUpdate(index: number) {
    this.isUpdates[index] = false;
    this.ngOnInit();
  }

  setToUpdate(index: number) {
    this.isUpdates[index] = true;
  }

  deleteSelectedEducation(semesterId: number) {
    if(confirm("Are you sure to delete the semester information?")) {
      this.http.delete<any>(`${this.mainUrl}/${semesterId}`)
        .subscribe( data => {
          alert(data.message);
          this.ngOnInit();
        }
      );
    }
  }
}
