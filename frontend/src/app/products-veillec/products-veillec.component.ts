import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Produit } from '../models/produit.model';
import { Veille } from '../models/veille.model';
import { VeilleService } from '../services/veille.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products-veillec',
  templateUrl: './products-veillec.component.html',
  styleUrls: ['./products-veillec.component.css']
})
export class ProductsVeillecComponent implements OnInit {
  items : Produit[] = [];
  origItems : Produit[] = [];
  myProduct : Produit
  targetMedic : string
  @ViewChild('selectList', { static: false }) selectList: ElementRef;
  veille : Veille = {} as Veille
  constructor(private prodserv:ProductService, private veillecserv:VeilleService) { }

  ngOnInit() {
    this.prodserv.getAll().subscribe((res:Produit[])=>{
      this.items = res
      this.origItems = res
    })
  }
  onChangeofOptions(newGov) {
    this.veille.produit = this.myProduct
  }
  filterItem(event) {
    if (!event) {
      this.items = this.origItems;
    }
    if (typeof event === 'string') {
      this.items = this.origItems.filter(a => a.libelle.toLowerCase()
        .startsWith(event.toLowerCase()));
    }
    this.selectList.nativeElement.size = this.items.length + 1;
  }      
  submit(f:NgForm){
    if(f.valid && this.veille && this.myProduct){
      this.veillecserv.add(this.veille).subscribe(()=>{
        window.location.reload()
      },err=>window.location.reload())
    }
  }
}
