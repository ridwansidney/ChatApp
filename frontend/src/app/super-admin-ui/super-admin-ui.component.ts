import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-super-admin-ui',
  templateUrl: './super-admin-ui.component.html',
  standalone: true,
  imports:[RouterModule, FormsModule]
})
export class SuperAdminUIComponent {

  constructor(private router: Router, private http: HttpClient) {}

// Example implementation for promoting a user to admin
  promoteUser() {

    const userId = prompt('Enter the user ID to promote:');
    if (userId) {
      this.http.post('http://localhost:3000/api/admin/promote', { userId })
        .subscribe(
          () => alert('User promoted to Admin successfully'),
          (error) => alert('Failed to promote user: ' + error.message)
        );
    }
  }

  removeAdmin() {
    // Example implementation for removing admin rights
    const adminId = prompt('Enter the admin ID to remove rights from:');
    if (adminId) {
      this.http.post('http://localhost:3000/api/admin/remove', { adminId })
        .subscribe(
          () => alert('Admin rights removed successfully'),
          (error) => alert('Failed to remove admin rights: ' + error.message)
        );
    }
  }
}



