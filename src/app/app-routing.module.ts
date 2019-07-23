import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { PassbookComponent } from './passbook/passbook.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { TransactionsComponent } from './transactions/transactions.component';

import { AuthGuard } from '../services/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', canActivate : [AuthGuard] , component: ProfileComponent},
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'passbook', component: PassbookComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
