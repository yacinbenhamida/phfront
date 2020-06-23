import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  titre : string = ""
  contenu : string = ""
  showInfo : boolean = true
  public data:User [] = [];
  userToAdd : User = {} as User
  constructor(private userservice:UserService) {
   }

  dtOptions: DataTables.Settings = {};
  usersTrigger: Subject<User> = new Subject();
  ngOnInit() {
    this.userToAdd.type_contrat = 'type'
    this.userToAdd.role='Role'
    this.userToAdd.sexe = 'homme'
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      responsive : true
    };
    this.userservice.getAllUsers().subscribe((data:User[])=>{
      this.data = data
      this.usersTrigger.next()
    },err=>{
      
    })
    
}
  submit(f:NgForm){
    if(f.valid){
      this.userservice.addUser(this.userToAdd).subscribe(res=>{
        window.location.reload()
      },err=>{
        this.titre = 'ajout echoué'
        this.contenu = "erreur de connexion, veuillez réessayer ultérieurement ou vérifier vos champs."
        this.showInfo = true
      })
    }
  }
  online(str){
    return str == 'active' ? 'badge badge-success text-center' : 'badge badge-danger text-center'
  }
  roleClass(role){
    return role == 'admin' ? 'badge badge-danger' : 'badge badge-warning'
  }
  etatCompte(input){
    return input == false ? 'badge badge-danger text-center' : 'badge badge-success text-center'
  }
 checkGender(s){
   this.userToAdd.sexe = s
 }
}
