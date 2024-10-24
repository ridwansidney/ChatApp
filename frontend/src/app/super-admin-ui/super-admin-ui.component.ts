import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-super-admin-ui',
  templateUrl: './super-admin-ui.component.html',
  standalone: true,
  imports:[RouterModule, FormsModule]
})
export class SuperAdminUIComponent {

  constructor(private router: Router) {}
}


