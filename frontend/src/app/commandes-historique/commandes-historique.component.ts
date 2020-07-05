import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/commande.model';

@Component({
  selector: 'app-commandes-historique',
  templateUrl: './commandes-historique.component.html',
  styleUrls: ['./commandes-historique.component.css']
})
export class CommandesHistoriqueComponent implements OnInit {
  commandes :Commande [] = []
  constructor(private comserv:CommandeService) { }

  ngOnInit() {
    this.comserv.getAll().subscribe((res : Commande[])=>{
        this.commandes = res
        console.log(res)
    })
  }

}
