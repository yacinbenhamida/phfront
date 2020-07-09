import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient, private userService : UserService) { }

  add(comment:string, taskid:number){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(comment && taskid && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/addComment',{comment : comment , user : connnectedUser.email , task : taskid},options)
    }       
    return null
  }
  edit(comm:Comment){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(comm && connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/editComment',{comment : comm},options)
    }
    return null
  }
  getCommentsOfTask(id){
    let connnectedUser :any = this.userService.getLoggedOn()
    if(connnectedUser){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "JWT "+connnectedUser.token });
      let options = { headers: headers };
      return this.http.post('/api/getCommentsOfTask',{task : id},options)
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
      return this.http.post('/api/deleteComment',{comment : id},options)
    }
    return null
  }
}
