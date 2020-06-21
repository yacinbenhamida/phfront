import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user : User = {} as User
  constructor(private router: Router, private userv:UserService) {
    this.userv.getCurrentUser().subscribe((res:any)=>{
      this.user.nom = res.nom
      this.user.prenom = res.prenom
    })
   }
  ngOnInit() {
  }
  isActiveTab(input){
    if(this.router.url === input || this.router.url.endsWith(input)) return 'sidebar-item active'
    else return 'sidebar-item'
  }
}
