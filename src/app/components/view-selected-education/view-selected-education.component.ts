import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-selected-education',
  templateUrl: './view-selected-education.component.html',
  styleUrls: ['./view-selected-education.component.css']
})
export class ViewSelectedEducationComponent implements OnInit {
  mainUrl: string = "https://managedo-backend.herokuapp.com/api/educations";

  @Input()
  id: number = -1;

  education: any = undefined;

  constructor(private http: HttpClient) { 
    
  }

  getEducationBasedOnId(id: number): void {

    this.http.get(`${this.mainUrl}/${id}`).subscribe(data => {
      let json: any = data;

      console.log(json);

      this.education = Education.fromJson(json);
    });
  }

  ngOnInit(): void {
    this.getEducationBasedOnId(this.id);
  }

}
