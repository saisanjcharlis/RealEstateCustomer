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
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'activity', canActivate : [AuthGuard] , component: ActivityComponent},
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'forgotPassword', component: ForgotpasswordComponent },
  { path: 'projectDetail', component: ProjectDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'passbook', component: PassbookComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
