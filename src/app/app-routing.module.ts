import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { PassbookComponent } from './passbook/passbook.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { AuthGuard } from '../services/auth.guard';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ActivityComponent } from './activity/activity.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { MessagesComponent } from './profile/messages/messages.component';
import { TransactionsComponent } from './profile/transactions/transactions.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { FavoritesComponent } from './profile/favorites/favorites.component';
import { SaveSearchComponent } from './profile/save-search/save-search.component';
import { BuyComponent } from './buy/buy.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'activity', canActivate : [AuthGuard] , component: ActivityComponent},
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'forgotPassword', component: ForgotpasswordComponent },
  { path: 'projectDetail', component: ProjectDetailComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'fav', component: FavoritesComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'savedSearches', component: SaveSearchComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'profile', component: ProfileInfoComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'passbook', component: PassbookComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
