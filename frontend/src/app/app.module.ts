import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaisieFichesComponent } from './saisie-fiches/saisie-fiches.component';
import { HistoriqueFichesComponent } from './historique-fiches/historique-fiches.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { TopbarComponent } from './topbar/topbar.component';
import {DataTablesModule} from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/authguard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './footer/footer.component';
import { SmallModalComponent } from './small-modal/small-modal.component';
import { AdminUsersEditComponent } from './admin-users-edit/admin-users-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SaisieFichesComponent,
    HistoriqueFichesComponent,
    ProfileComponent,
    AdminUsersComponent,
    TopbarComponent,
    LoginComponent,
    FooterComponent,
    SmallModalComponent,
    AdminUsersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
