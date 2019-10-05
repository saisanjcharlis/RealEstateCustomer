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
import { AllotmentComponent } from './allotment/allotment.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { SuccessAllotComponent } from './success-allot/success-allot.component';
import { HelpComponent } from './help/help.component';
import { PropDetailComponent } from './prop-detail/prop-detail.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'activity', canActivate : [AuthGuard] , component: ActivityComponent},
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'forgotPassword', component: ForgotpasswordComponent },
  { path: 'projectDetail/:id',canActivate : [AuthGuard], component: ProjectDetailComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'fav',canActivate : [AuthGuard], component: FavoritesComponent },
  { path: 'help', component: HelpComponent },
  // { path: 'buy/:id', component: BuyComponent },
  { path: 'propDetail/:id', canActivate : [AuthGuard], component: PropDetailComponent },
  { path: 'buy/:id', canActivate : [AuthGuard], component: BuyComponent },
  { path: 'payPlans', canActivate : [AuthGuard], component: PaymentPlanComponent },
  { path: 'successAllot',canActivate : [AuthGuard], component: SuccessAllotComponent },
  { path: 'allotment',canActivate : [AuthGuard], component: AllotmentComponent },
  { path: 'savedSearches',canActivate : [AuthGuard], component: SaveSearchComponent },
  { path: 'transactions',canActivate : [AuthGuard], component: TransactionsComponent },
  { path: 'profile',canActivate : [AuthGuard], component: ProfileInfoComponent },
  { path: 'settings',canActivate : [AuthGuard], component: SettingsComponent },
  { path: 'passbook',canActivate : [AuthGuard], component: PassbookComponent },
  { path: 'projects',canActivate : [AuthGuard], component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
