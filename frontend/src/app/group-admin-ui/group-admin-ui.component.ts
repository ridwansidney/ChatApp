import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-admin-ui',
  templateUrl: './group-admin-ui.component.html',
  standalone: true,
  imports:[FormsModule]
})
export class GroupAdminUIComponent {
  groups: any[] = [];

  constructor(private groupService: GroupService) {
    this.groups = this.groupService.getGroups();
  }}
