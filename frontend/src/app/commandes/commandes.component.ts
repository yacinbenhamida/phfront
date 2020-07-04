import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CommandeProduit } from '../models/commandeproduit.model';
import { CommandeProduitItemComponent } from '../commande-produit-item/commande-produit-item.component';
import { ProductService } from '../services/product.service';
import { Produit } from '../models/produit.model';

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
  constructor(private cliserv:ClientService,
    private fb:FormBuilder,private prodserv:ProductService) { 
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
      prix: new FormControl({},Validators.required),
      reduction : new FormControl({value : '0'},Validators.required),
      prixTTC : new FormControl({value : '0',disabled : true},Validators.required)
    })
  }
   
  addProduct() {
    this.products().push(this.newProduct());
  }
   
  removeProduct(i:number) {
    this.products().removeAt(i);
  }
  
  submit(){
    console.log(this.products())
  }
  calculRed(selectedp,qte,red){
      let id = Number(selectedp.substring(selectedp.indexOf(':')+1,selectedp.length))
      let produit:Produit = this.produits.filter(x=>x.id===id)[0]
      const nprix = (produit.prix *100) - (produit.prix*red)
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
      const nprixu = (produitu.prix *100) - (produitu.prix*element.reduction)
      this.totalTTC += Number(nprixu * element.quantite)
    });
    this.totalReduction = (Number(this.totalReduction) / nbprod)
  }
}
