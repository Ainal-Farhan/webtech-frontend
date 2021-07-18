import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-selected-education',
  templateUrl: './view-selected-education.component.html',
  styleUrls: ['./view-selected-education.component.css']
})
export class ViewSelectedEducationComponent implements OnInit {
  education: any = undefined;

  constructor(private http: HttpClient) { 
    
  }

  getEducationBasedOnId(id: number): void {

    this.http.get(`https://managedo-backend.herokuapp.com/api/educations/${id}`).subscribe(data => {
      // Read the result field from the JSON response.

      let json: any = data;

      console.log(json);

      this.education = Education.fromJson(json);
    });
  }

  ngOnInit(): void {
    this.getEducationBasedOnId(1);
  }

}
