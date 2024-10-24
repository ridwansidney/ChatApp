import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title = 'ChatApp';

  constructor(private router: Router) {}
}
