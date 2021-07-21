import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webtech-frontend';
  currentUserType = 'none';
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    let loggedInUser: any = JSON.parse(localStorage.getItem('currentUser') || '{"id": null}');

    if(loggedInUser.id === null) {
      this.isAuthenticated = false;
      this.currentUserType = 'none';
      return;
    }

    this.isAuthenticated = true;
    this.currentUserType = loggedInUser.userType;
  }

  isParent(): boolean {
    if(this.currentUserType === "parent") return true;
    return false;
  }

  isStudent(): boolean {
    if(this.currentUserType === "student") return true;
    return false;
  }
}
