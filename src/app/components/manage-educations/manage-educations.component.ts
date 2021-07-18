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
    this.route.queryParams.subscribe(params => {
      this.studentId = params.id;
    });
  }

  getStudentId(): number {
    return this.studentId;
  }

}
