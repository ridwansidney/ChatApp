import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/login']);  // Navigates to the 'home' route
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);  // Navigates to the 'Dashboard' route
  }
}
