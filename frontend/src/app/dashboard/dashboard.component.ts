import { Component } from '@angular/core';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  groups: Group[] = [
    { id: '1', name: 'Group 1', channels: [{ id: '1', name: 'Channel 1' }] },
    { id: '2', name: 'Group 2', channels: [{ id: '2', name: 'Channel 2' }] }
  ];

//Logic to join groups
  joinGroup(groupId: string) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user.groups = user.groups || [];
    if (!user.groups.includes(groupId)) {
      user.groups.push(groupId);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}
