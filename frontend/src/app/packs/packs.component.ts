import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Pack } from '../models/pack.model';
import { Produit } from '../models/produit.model';
import { ProductService } from '../services/product.service';
import { PackService } from '../services/pack.service';
import { PackProduit } from '../models/packproduit.model';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {
  options: DataTables.Settings = {};
  trigger: Subject<Pack> = new Subject();
  showForm : boolean = false
  addError : boolean = false
  packToadd : Pack = {} as Pack
  packForm: FormGroup;
  produits : Produit [] =[]
  listPacks : Pack [] = []
  selectedPack : Pack
  PPOfselectedPack : PackProduit [] = []
  selectedPackForDelete : Pack
  constructor(   private fb:FormBuilder, private produitserv: ProductService,private packserv:PackService) {
    this.packForm = this.fb.group({
      products: this.fb.array([]) ,
    });
    this.produitserv.getAll().subscribe((resl:Produit[])=>{
      this.produits = resl
      packserv.getAll().subscribe((packs:Pack[])=>{
        this.listPacks = packs
        this.trigger.next()
      })
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
    if(g.valid && this.packForm.valid && this.packToadd){
      this.packserv.add(this.packToadd,this.packForm.value.products).subscribe(()=>{
        window.location.reload()
      },err=>this.addError = true)

    }
      
  }
  products() : FormArray {
    return this.packForm.get("products") as FormArray
  }
   
  newProduct(): FormGroup {
    return this.fb.group({
      produit : new FormControl({},Validators.required),
      quantite: new FormControl({},Validators.required),
      gratuit : new FormControl(false, Validators.required),
      prixUnitaire : new FormControl({value : '0',disabled : true},Validators.required)
    })
  } 
  addProduct() {
    this.products().push(this.newProduct());
  }
   
  removeProduct(i:number) {
    this.products().removeAt(i);
    if(this.packForm.value.products[i]) this.packForm.value.products.splice(i,1)
    this.calculPrixTotal()
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
      this.packToadd.prix_total += Number(element.prixUnitaire) * Number(element.quantite)
    });
    
  }
  setProductValue(val,i,prod){
    if(this.products().at(i).value.prixUnitaire > val){
      this.products().at(i).value.prixUnitaire = val
      this.products().at(i).value.gratuit = true
    }
    else {
      let id = Number(prod.substring(prod.indexOf(':')+1,prod.length))
      let produit:Produit = this.produits.filter(x=>x.id===id)[0]
      this.products().at(i).value.prixUnitaire = Number(produit.prix)
      this.products().at(i).value.gratuit = false
    }
    this.calculPrixTotal()
  }
  showPackDetails(pack:Pack){
    this.packserv.getProdPacks(pack.id).subscribe((res:PackProduit[])=>{
      this.selectedPack  = pack
      this.PPOfselectedPack = res
      console.log(res)
      console.log(this.PPOfselectedPack)
      console.log(pack)

    })
    
  }
  deletePack(id){
    this.packserv.delete(id).subscribe(res=>window.location.reload())
  }
  setPack(p){
    this.selectedPackForDelete = p
  }
}
