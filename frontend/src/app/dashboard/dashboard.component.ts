
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

  recentUsers = [
    {
      name: 'Jason ',
      avatarUrl: 'https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      lastMessageDate: '25 Dec',
      active: true
    },
    {
      name: 'Frat House',
      avatarUrl: 'https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      lastMessageDate: '25 Dec',
      active: true
    }
    // Add more user objects as needed
  ];

  chatMessages = [
    {
      content: 'Test, which is a new approach to have all solutions astrology under one roof.',
      timestamp: '12:00 PM | Aug 13',
      isSender: false,
      avatarUrl: 'https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg'
    },
    {
      content: 'Test which is a new approach to have all solutions astrology under one roof.',
      timestamp: '12:00 PM | Aug 13',
      isSender: true
    }
    // Add more message objects as needed
  ];

  newMessage = '';

  selectUser(user: any) {
    // Logic to select user and load chat
    console.log('User selected:', user);
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatMessages.push({
        content: this.newMessage,
        timestamp: new Date().toLocaleTimeString(),
        isSender: true
      });
      this.newMessage = '';
    }
  }

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

