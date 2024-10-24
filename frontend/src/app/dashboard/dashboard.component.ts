import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../service/group.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  groups: any[] = [];

  constructor(private router: Router, private groupService: GroupService) {}

  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.user = JSON.parse(loggedInUser);
      this.groups = this.groupService.getGroups().filter(group => group.members.includes(this.user.username));
    } else {
      this.router.navigate(['/']);
    }
  }
}
