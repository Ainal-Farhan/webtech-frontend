import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webtech-frontend';
  currentUserType = 'parent';

  isParent(): boolean {
    if(this.currentUserType === "parent") return true;
    return false;
  }

  isStudent(): boolean {
    if(this.currentUserType === "student") return true;
    return false;
  }
}
