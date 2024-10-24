import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminUIComponent } from './super-admin-ui/super-admin-ui.component';
import { GroupAdminUIComponent } from './group-admin-ui/group-admin-ui.component';
import { UserUIComponent } from './user-ui/user-ui.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'super-admin', component: SuperAdminUIComponent },
      { path: 'group-admin', component: GroupAdminUIComponent },
      { path: 'user', component: UserUIComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
