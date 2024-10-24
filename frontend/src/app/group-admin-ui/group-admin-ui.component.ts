import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-group-admin-ui',
  templateUrl: './group-admin-ui.component.html',
})
export class GroupAdminUIComponent {
  groups: any[] = [];

  constructor(private groupService: GroupService) {
    this.groups = this.groupService.getGroups();
  }}
