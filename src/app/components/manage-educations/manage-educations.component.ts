import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-educations',
  templateUrl: './manage-educations.component.html',
  styleUrls: ['./manage-educations.component.css']
})
export class ManageEducationsComponent implements OnInit {
  studentId: number = -1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // get the student id from local storage
    this.studentId =  JSON.parse(localStorage.getItem('currentUser') || '{"studentId":null}').studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }

}
