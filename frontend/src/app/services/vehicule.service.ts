import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Vehicule } from '../models/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient, private userService : UserService) { }

  getUserVehicle(targetEmail : string){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(targetEmail && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/getUserCars',{email : targetEmail},options)
    }
    return null
  }
  addVehicle(vehicule:Vehicule){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(vehicule && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/addVehicle',{vehicule : vehicule},options)
    }
    return null
  }
}
