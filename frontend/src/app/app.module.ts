import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
  LoginComponent,
  ChatComponent,
  DashboardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    provideHttpClient()
  ],
})
export class AppModule {}
