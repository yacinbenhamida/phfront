import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaisieFichesComponent } from './saisie-fiches/saisie-fiches.component';
import { HistoriqueFichesComponent } from './historique-fiches/historique-fiches.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/authguard.service';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path : 'dashboard' , component : DashboardComponent , canActivate : [AuthGuardService]},
  {path : 'saisie-fiches', component : SaisieFichesComponent, canActivate : [AuthGuardService]},
  {path : 'historique-fiches', component : HistoriqueFichesComponent, canActivate : [AuthGuardService]},
  {path : 'profile', component : ProfileComponent, canActivate : [AuthGuardService]},
  {path : 'users', component : AdminUsersComponent, canActivate : [AuthGuardService]},
  {path : 'products', component : ProductsComponent, canActivate : [AuthGuardService]},
  {path : 'login' , component : LoginComponent},
  { path: '', component: DashboardComponent, canActivate : [AuthGuardService] },
  {path : '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
