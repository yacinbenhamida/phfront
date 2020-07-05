import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CommandeProduit } from '../models/commandeproduit.model';
import { CommandeProduitItemComponent } from '../commande-produit-item/commande-produit-item.component';
import { ProductService } from '../services/product.service';
import { Produit } from '../models/produit.model';
import { Commande } from '../models/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  clients : Client[] = []
  targetClient : any 
  commandeForm: FormGroup;
  produits : Produit[] = []
  totalTTC : number = 0
  totalReduction : number = 0
  totalQte : number = 0
  estimations : boolean = false
  commandeToAdd : Commande = {} as Commande
  constructor(private cliserv:ClientService,
    private fb:FormBuilder,private prodserv:ProductService,
    private comserv:CommandeService) { 
      this.commandeForm = this.fb.group({
        products: this.fb.array([]) ,
      });
  }
  ngOnInit() {
    this.targetClient = 0
    this.cliserv.getAll('pharmacie').subscribe((p:Client[])=>{
      this.cliserv.getAll('grossiste').subscribe((g:Client[])=>{
          this.clients = p.concat(g)
      })
      this.prodserv.getAll().subscribe((resl:Produit[])=>{
        this.produits = resl
      })
    })
  }
  products() : FormArray {
    return this.commandeForm.get("products") as FormArray
  }
   
  newProduct(): FormGroup {
    return this.fb.group({
      produit : new FormControl({},Validators.required),
      quantite: new FormControl({},Validators.required),
      reduction : new FormControl({value : '0'},Validators.required),
      prixTTC : new FormControl({value : '0',disabled : true},Validators.required)
    })
  }
   
  addProduct() {
    this.products().push(this.newProduct());
  }
   
  removeProduct(i:number) {
    this.products().removeAt(i);
    this.estimationTotal()
  }
  
  submit(){
    console.log(this.products().value)
    if(this.products() && this.commandeForm.valid){
      this.commandeToAdd.prix_total = this.totalTTC
      this.commandeToAdd.total_remise = this.totalReduction
      this.commandeToAdd.nb_produits = this.totalQte
      this.commandeToAdd.client = this.targetClient
      this.comserv.add(this.commandeToAdd,this.products().value).subscribe(data=>{
        window.location.reload()
      })
    } 
   
  }
  calculRed(selectedp,qte,red){
      let id = Number(selectedp.substring(selectedp.indexOf(':')+1,selectedp.length))
      let produit:Produit = this.produits.filter(x=>x.id===id)[0]
      const nprix = Number((produit.prix) - (produit.prix*(red/100)))
      this.estimationTotal()
      return  Number(nprix * qte)
  }
  estimationTotal(){ 
    this.estimations = true   
    this.totalQte =0
    this.totalReduction = 0
    this.totalTTC = 0
    let nbprod = 0
    this.commandeForm.value.products.forEach(element => {
      this.totalQte += Number(element.quantite)
      this.totalReduction += Number(element.reduction)
      nbprod++
      let produitu:Produit = this.produits.filter(x=>x.id===element.produit)[0]
      const nprixu = Number(produitu.prix  - (produitu.prix*(element.reduction/100)))
      this.totalTTC += Number(nprixu * element.quantite)
    });
    this.totalReduction = (Number(this.totalReduction) / nbprod)
  }
}
