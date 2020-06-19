import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaisieFichesComponent } from './saisie-fiches/saisie-fiches.component';
import { HistoriqueFichesComponent } from './historique-fiches/historique-fiches.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'saisie-fiches', component : SaisieFichesComponent},
  {path : 'historique-fiches', component : HistoriqueFichesComponent},
  {path : 'profile', component : ProfileComponent},
  {path : 'users', component : AdminUsersComponent},
  {path : '',component : DashboardComponent},
  {path : 'login' , component : LoginComponent},
  {path : '*', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
