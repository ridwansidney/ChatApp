import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]

})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  handleLogin() {
    this.http.post('http://localhost:3000/api/auth/login', { username: this.username, password: this.password })
      .subscribe(
        (user: any) => {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          alert('Invalid credentials');
        }
      );
  }
}
