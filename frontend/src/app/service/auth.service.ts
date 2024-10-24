import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private hardCodedUsers = [
    { username: 'superadmin', password: 'admin123', role: 'SuperAdmin' },
    { username: 'groupadmin', password: 'admin123', role: 'GroupAdmin' },
    { username: 'user', password: 'user123', role: 'User' },
  ];

  constructor(private router: Router) {}

  login(username: string, password: string) {
    const user = this.hardCodedUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }

  getLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  }
}
