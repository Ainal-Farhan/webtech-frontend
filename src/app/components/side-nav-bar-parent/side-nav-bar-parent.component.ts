import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav-bar-parent',
  templateUrl: './side-nav-bar-parent.component.html',
  styleUrls: ['./side-nav-bar-parent.component.css']
})
export class SideNavBarParentComponent {

  username!: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('currentUser') || '{"username": null}').username;
  }

}
