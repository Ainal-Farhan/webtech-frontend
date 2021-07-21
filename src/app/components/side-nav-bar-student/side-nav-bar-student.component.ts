import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav-bar-student',
  templateUrl: './side-nav-bar-student.component.html',
  styleUrls: ['./side-nav-bar-student.component.css']
})
export class SideNavBarStudentComponent {

  manageEducationLink: string = 'manage-educations';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
