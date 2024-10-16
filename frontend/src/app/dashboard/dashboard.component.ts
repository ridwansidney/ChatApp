import { Component } from '@angular/core';
import { Group } from '../models/group.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: User;
  groups: Group[] = [
    { id: '1', name: 'Group 1', channels: [{ id: '1', name: 'Channel 1' }] },
    { id: '2', name: 'Group 2', channels: [{ id: '2', name: 'Channel 2' }] }
  ];

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

//Logic to join groups
  joinGroup(groupId: string) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user.groups = user.groups || [];
    if (!user.groups.includes(groupId)) {
      user.groups.push(groupId);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

 //Logic to promote a user
 promoteUser(username: string) {
  let user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!username) {
      console.error('No username provided for promotion.');
      return;
  }
if (user.role === 'Super Admin') {
  console.log(`Promoted user: ${username}`);
}
}

}

