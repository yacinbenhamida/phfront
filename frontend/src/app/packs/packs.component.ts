import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Pack } from '../models/pack.model';
import { Produit } from '../models/produit.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {
  options: DataTables.Settings = {};
  trigger: Subject<any> = new Subject();
  showForm : boolean = false
  addError : boolean = false
  packToadd : Pack = {} as Pack
  packForm: FormGroup;
  produits : Produit [] =[]
  constructor(   private fb:FormBuilder, private produitserv: ProductService) {
    this.packForm = this.fb.group({
      products: this.fb.array([]) ,
    });
    this.produitserv.getAll().subscribe((resl:Produit[])=>{
      this.produits = resl
    })
   }

  ngOnInit() {
    this.packToadd.prix_total = 0
    this.options = {
      pagingType: 'full_numbers',
      pageLength: 5,  
      processing: true,
      responsive : true
    };
  }
  showPanel(){
    this.showForm = true
  }
  hidePanel(){
    this.showForm = false
  }
  submit(g:NgForm){
    if(g.valid && this.packForm.valid){
      console.log(g.value )
      console.log(this.packForm.value)
    }
      
  }
  products() : FormArray {
    return this.packForm.get("products") as FormArray
  }
   
  newProduct(): FormGroup {
    return this.fb.group({
      produit : new FormControl({},Validators.required),
      quantite: new FormControl(0,Validators.required),
      gratuit : new FormControl(false, Validators.required),
      prixUnitaire : new FormControl({value : '0',disabled : true},Validators.required)
    })
  } 
  addProduct() {
    this.products().push(this.newProduct());
  }
   
  removeProduct(i:number) {
    this.products().removeAt(i);
  }
  loadPrice(prod,qte,i){
    let id = Number(prod.substring(prod.indexOf(':')+1,prod.length))
    let produit:Produit = this.produits.filter(x=>x.id===id)[0]
    this.products().at(i).value.prixUnitaire = Number(produit.prix)
    this.calculPrixTotal()
    return Number(produit.prix * qte)
  }
  calculPrixTotal(){
    this.packToadd.prix_total = 0
    this.packForm.value.products.forEach(element => {
      this.packToadd.prix_total += Number(element.prixUnitaire * element.quantite)
    });
    
  }
  setProductValue(val,i){
    this.products().at(i).value.prixUnitaire = val
    console.log(this.products().at(i).value.prixUnitaire)
    this.calculPrixTotal()
  }

}
