import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
})
export class UserUIComponent {
  channels: any[] = [];
  groups: any[] = [];

  constructor(private groupService: GroupService) {
    this.groups = this.groupService.getGroups();
  }

  selectGroup(groupId: number) {
    this.channels = this.groupService.getChannels(groupId);
  }
}
