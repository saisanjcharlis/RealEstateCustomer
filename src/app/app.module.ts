import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { Angular2AirDatepickerModule } from 'angular2-air-datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlotInfoContainerComponent } from './activity/plot-info-container/plot-info-container.component';
import { EmiDetailComponent } from './activity/emi-detail/emi-detail.component';
import { RecentTransComponent } from './activity/recent-trans/recent-trans.component';
import { EmiDateComponent } from './activity/emi-date/emi-date.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { PassbookComponent } from './passbook/passbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AuthGuard } from '../services/auth.guard';
import { FeedComponent } from './activity/feed/feed.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ImageGalleryComponent } from './projects/project-detail/image-gallery/image-gallery.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './profile/transactions/transactions.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { MessagesComponent } from './profile/messages/messages.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { SavedsearchComponent } from './activity/savedsearch/savedsearch.component';
import { FavoritesComponent } from './activity/favorites/favorites.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PlotInfoContainerComponent,
    EmiDetailComponent,
    RecentTransComponent,
    EmiDateComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    PassbookComponent,
    CreateProfileComponent,
    FeedComponent,
    ForgotpasswordComponent,
    ProjectDetailComponent,
    ImageGalleryComponent,
    SidebarComponent,
    ActivityComponent,
    ProfileComponent,
    TransactionsComponent,
    ProfileInfoComponent,
    MessagesComponent,
    SettingsComponent,
    SavedsearchComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Angular2AirDatepickerModule,
    BrowserAnimationsModule,
    DeferLoadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmZRbVe0NCyJB91vrGLrcb8pKAWFEsTwQ'
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
