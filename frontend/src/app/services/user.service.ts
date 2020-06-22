import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(email,password){
    return this.http.post('/api/login',{email : email,password : password})
  }
  getCurrentUser(){
    let user :any = localStorage.getItem('connected') ? JSON.parse(localStorage.getItem('connected')) : JSON.parse(sessionStorage.getItem('connected'))
    if(user){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+user.token });
      let options = { headers: headers };
      return this.http.get('/api/connected?email='+user.email,options)
    }
    return null
  }
  public isAuthenticated(): boolean {
    const user = localStorage.getItem('connected') ? JSON.parse(localStorage.getItem('connected')) : JSON.parse(sessionStorage.getItem('connected'))
    return user && user.token 
  }
 
}
