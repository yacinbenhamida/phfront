import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  isActiveTab(input){
    if(this.router.url === input || this.router.url.endsWith(input)) return 'sidebar-item active'
    else return 'sidebar-item'
  }
}
