import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'JWT'
  })
};
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
  }
 
}
