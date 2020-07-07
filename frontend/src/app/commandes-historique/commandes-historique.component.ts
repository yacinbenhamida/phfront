import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/commande.model';
import { Subject } from 'rxjs';
import { CommandeProduit } from '../models/commandeproduit.model';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-commandes-historique',
  templateUrl: './commandes-historique.component.html',
  styleUrls: ['./commandes-historique.component.css']
})
export class CommandesHistoriqueComponent implements OnInit {
  commandes :Commande [] = []
  constructor(private comserv:CommandeService) { }
  dtOptions: DataTables.Settings = {};
  trigger: Subject<Commande> = new Subject();
  detailsCommande : CommandeProduit [] = []
  selectedCommande : Commande
  isPrinting : boolean = false
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,  
      processing: true,
      responsive : true
    };
    this.comserv.getAll().subscribe((res : Commande[])=>{
        this.commandes = res
        this.trigger.next()
        console.log(res)
    })
  }
  loadInvoice(c:Commande){
    this.selectedCommande = c
    this.comserv.getProduitsOfCommande(c.id).subscribe((lignec:CommandeProduit[])=>{
      console.log(lignec)
        this.detailsCommande = lignec
    })
  }
  deleteInvoice(c:Commande){
    this.comserv.delete(c.id).subscribe(()=>{
      window.location.reload()
    })
  }
  printPage(){
    this.isPrinting = true
    document.getElementById('x').style.display = "none"
    document.getElementById('imp').style.display = "none"
    let printContents = document.getElementById('print').innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
     window.location.reload()
  }
}
