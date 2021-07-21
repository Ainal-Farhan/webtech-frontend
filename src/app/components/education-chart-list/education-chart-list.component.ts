import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Semester } from 'src/app/models/semester';


@Component({
  selector: 'app-education-chart-list',
  templateUrl: './education-chart-list.component.html',
  styleUrls: ['./education-chart-list.component.css']
})
export class EducationChartListComponent implements OnInit {
  @Input()
  educationId: number = -1;

  semesters!: any;

  mainUrl: string = "https://managedo-backend.herokuapp.com/api/semesters";

  constructor(private http: HttpClient) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  target: number[] = [];
  achieved: number[] = [];
  label: string[] = [];

  // public barChartData: Map<number[], string>[] = [];
  public barChartLabels = this.label;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.target, label: 'Achieved'},
    {data: this.achieved, label: 'Targeted'},
  ];

  ngOnInit(): void {
    this.getAllSemester();
  }

  getAllSemester () {
    this.http.get(`${this.mainUrl}/fkEducationId/${this.educationId}`).subscribe(data => {
      let list: any = data;

      if(data === []) return;

      let jsonList: Semester[] = [];

      list.forEach((json: any) => {
        jsonList.push(Semester.fromJson(json));
      });
      // this.semesters = jsonList;
      this.assignData(jsonList);
    });
  }

  assignData(list: Semester[]) {
    list.forEach((element: Semester) => {
      this.target.push(element.targetedGPA);
    });

    list.forEach((element: Semester) => {
      this.achieved.push(element.achievedGPA);
    });

    list.forEach((element: Semester) => {
      this.label.push(`Sem ${element.semesterNo}`);
    });
  }

}
