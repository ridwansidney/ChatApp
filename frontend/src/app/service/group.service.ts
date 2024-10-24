import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
   })
   export class GroupService {
     private groups = [
       { id: 1, name: 'Group 1', admin: 'groupadmin', members: ['groupadmin', 'user'] },
       { id: 2, name: 'Group 2', admin: 'groupadmin', members: ['groupadmin'] },
     ];

     private channels = [
      { groupId: 1, name: 'General' },
      { groupId: 1, name: 'Random' },
      { groupId: 2, name: 'Updates' },
    ];

     getGroups() {
       return this.groups;
     }

     // Add methods for managing groups and channels

     addGroup(groupName: string, admin: string) {
      const newGroup = {
        id: this.groups.length + 1,
        name: groupName,
        admin: admin,
        members: [admin],
      };
      this.groups.push(newGroup);
    }

    removeGroup(groupId: number) {
      this.groups = this.groups.filter(group => group.id !== groupId);
    }

    addMemberToGroup(groupId: number, username: string) {
      const group = this.groups.find(group => group.id === groupId);
      if (group && !group.members.includes(username)) {
        group.members.push(username);
      }
    }

    removeMemberFromGroup(groupId: number, username: string) {
      const group = this.groups.find(group => group.id === groupId);
      if (group) {
        group.members = group.members.filter(member => member !== username);
      }
    }

    getChannels(groupId: number) {
      return this.channels.filter(channel => channel.groupId === groupId);
    }

    addChannel(groupId: number, channelName: string) {
      const newChannel = {
        groupId: groupId,
        name: channelName,
      };
      this.channels.push(newChannel);
    }

    removeChannel(groupId: number, channelName: string) {
      this.channels = this.channels.filter(
        channel => channel.groupId !== groupId || channel.name !== channelName
      );
    }
   }
   
