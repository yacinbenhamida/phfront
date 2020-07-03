import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Produit } from '../models/produit.model';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient, private userService : UserService) { }

  add(client:Client){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(client && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/addClient',{client : client},options)
    }
    return null
  }
  edit(client:Client){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(client && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/editClient',{client : client},options)
    }
    return null
  }
  getAll(type){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.get('/api/allClients?type='+type,options)
    }
    return null
  }
  delete(id){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(id && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/deleteClient',{id : id},options)
    }
    return null
  }
}
