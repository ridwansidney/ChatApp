
import { Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GroupService } from '../service/group.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuperAdminUIComponent } from '../super-admin-ui/super-admin-ui.component';
import { GroupAdminUIComponent } from '../group-admin-ui/group-admin-ui.component';
import { UserUIComponent } from '../user-ui/user-ui.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, SuperAdminUIComponent, GroupAdminUIComponent ,UserUIComponent]
})
export class DashboardComponent {
  user: any;
  groups: any[] = [];

  constructor(private router: Router, private http: HttpClient, private groupService: GroupService) {}

  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.user = JSON.parse(loggedInUser);
      this.http.get<any[]>('http://localhost:3000/api/groups').subscribe(groups => {
        this.groups = groups.filter(group => group.members.includes(this.user.username));
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}

