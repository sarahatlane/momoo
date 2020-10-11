import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { JobComponent } from './components/job/job.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { ServiceComponent } from './components/service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FilterComponent,
    JobComponent,
    RegisterComponent,
    LoginComponent,
    NewComponent,
    ServiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
