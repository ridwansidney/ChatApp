import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

//Hard coded login logic
login() {
  if (this.username === 'super' && this.password === '123') {
    const user = { username: this.username, role: 'Super Admin', groups: [] };
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid username or password');
  }
}
}
