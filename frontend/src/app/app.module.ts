import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminUIComponent } from './super-admin-ui/super-admin-ui.component';
import { GroupAdminUIComponent } from './group-admin-ui/group-admin-ui.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
declarations:[
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],

  providers: [],
})
export class AppModule {}
