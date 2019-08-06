import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { Angular2AirDatepickerModule } from 'angular2-air-datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PlotInfoContainerComponent } from './profile/plot-info-container/plot-info-container.component';
import { EmiDetailComponent } from './profile/emi-detail/emi-detail.component';
import { RecentTransComponent } from './profile/recent-trans/recent-trans.component';
import { EmiDateComponent } from './profile/emi-date/emi-date.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { PassbookComponent } from './passbook/passbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProjectComponent } from './projects/project/project.component';
import { AuthGuard } from '../services/auth.guard';
import { TransactionsComponent } from './transactions/transactions.component';
import { FeedComponent } from './profile/feed/feed.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    PlotInfoContainerComponent,
    EmiDetailComponent,
    RecentTransComponent,
    EmiDateComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    PassbookComponent,
    CreateProfileComponent,
    ProjectComponent,
    TransactionsComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Angular2AirDatepickerModule,
    BrowserAnimationsModule,
    DeferLoadModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
