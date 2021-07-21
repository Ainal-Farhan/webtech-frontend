import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Parent } from 'src/app/models/parent';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-page-parent',
  templateUrl: './profile-page-parent.component.html',
  styleUrls: ['./profile-page-parent.component.css']
})
export class ProfilePageParentComponent implements OnInit {

  parentId: number = -1;
  parent:any = undefined;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // get the parent id from local storage
    this.parentId =  JSON.parse(localStorage.getItem('currentUser') || '{"parentId":null}').parentId;

    this.http.get(`${environment.apiUrl}/users/fkParentId/${this.parentId}`).subscribe(
      (data: any) => {
        let usr = data[0];
        let prt = JSON.parse(`{"id": ${this.parentId}, "user": null}`);
        prt.user = usr;

        this.parent = Parent.fromJson(prt);

        console.log(this.parent);
      }
    )
  }

}
