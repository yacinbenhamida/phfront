import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  user : User = {} as User
  constructor(private router: Router, private userv:UserService) {
  
   }

  ngOnInit() {
    if(this.userv.getCurrentUser()){
       this.userv.getCurrentUser().subscribe((res:any)=>{
      this.user.nom = res.nom
      this.user.prenom = res.prenom
      this.user.imageUrl = res.imageUrl
    })
  }
  }
  logout(){
      this.userv.logout().subscribe(res=>{
        localStorage.clear()
        sessionStorage.clear()
        this.router.navigate(['login'])
      })
      
  }
}
