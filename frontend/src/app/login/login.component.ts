import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from "@angular/router"  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = null
  password : string  = null
  always : boolean = false
  constructor(private userservice:UserService,private router: Router) { }

  ngOnInit() {
    if(this.userservice.isAuthenticated()){
      this.router.navigate(['/dashboard'])
    }
  }
  login(){
    if(this.email && this.password){
      this.userservice.login(this.email,this.password).subscribe((res:any)=>{
        if(res && res.auth){
          let user :any = {
            token : res.token,
            email : this.email
          }
          if(this.always){     
            localStorage.setItem('connected',JSON.stringify(user))
          }
          else sessionStorage.setItem('connected',JSON.stringify(user))
          
          this.router.navigate(['/dashboard'])
          
        }else alert('informations invalides')
      },(err)=>{
        alert('informations invalides')
      })
    }
  }
  check(){
    this.always = !this.always
  }
}
