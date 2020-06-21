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
    this.userv.getCurrentUser().subscribe((res:any)=>{
      this.user.nom = res.nom
      this.user.prenom = res.prenom
    })
   }

  ngOnInit() {
    
  }
  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate(['login'])
  }
}
