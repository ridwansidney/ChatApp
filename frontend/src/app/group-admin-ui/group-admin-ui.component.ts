import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group-admin-ui',
  templateUrl: './group-admin-ui.component.html',
  standalone: true,
  imports:[FormsModule]
})
export class GroupAdminUIComponent {
  groups: any[] = [];
  constructor(private http: HttpClient, private groupService: GroupService) {
    this.groups = this.groupService.getGroups();

    }
    addChannel() {
      const groupId = prompt('Enter the group ID to add a channel:');
      const channelName = prompt('Enter the channel name:');
      if (groupId && channelName) {
        this.http.post('http://localhost:3000/api/group/add-channel', { groupId, channelName })
          .subscribe(
            () => alert('Channel added successfully'),
            (error) => alert('Failed to add channel: ' + error.message)
          );
      }
    }
    createGroup() {
      const groupName = prompt('Enter the group name:');
      if (groupName) {
        this.http.post('http://localhost:3000/api/group/create', { groupName })
          .subscribe(
            () => alert('Group created successfully'),
            (error) => alert('Failed to create group: ' + error.message)
          );
      }
    }
    removeUser() {
      const groupId = prompt('Enter the group ID:');
      const username = prompt('Enter the username to remove:');
      if (groupId && username) {
        this.http.post('http://localhost:3000/api/group/remove-user', { groupId, username })
          .subscribe(
            () => alert('User removed from group successfully'),
            (error) => alert('Failed to remove user: ' + error.message)
          );
      }
    }

  }

