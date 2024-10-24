import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  standalone: true,
  imports: [RouterModule]
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
