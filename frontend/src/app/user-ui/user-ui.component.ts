import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class UserUIComponent {
  channels: any[] = [];
  groups: any[] = [];

  constructor(private groupService: GroupService, private http: HttpClient) {
    this.groups = this.groupService.getGroups();
  }
  joinGroup() {
    const groupId = prompt('Enter the group ID to join:');
    if (groupId) {
      this.http.post('http://localhost:3000/api/group/join', { groupId })
        .subscribe(
          () => alert('Joined group successfully'),
          (error) => alert('Failed to join group: ' + error.message)
        );
    }
  }

  enterChannel() {
    const channelId = prompt('Enter the channel ID to enter:');
    if (channelId) {
      this.http.get(`http://localhost:3000/api/channel/${channelId}`)
        .subscribe(
          () => alert('Entered channel successfully'),
          (error) => alert('Failed to enter channel: ' + error.message)
        );
    }
  }

  selectGroup(groupId: number) {
    this.channels = this.groupService.getChannels(groupId);
  }
}
