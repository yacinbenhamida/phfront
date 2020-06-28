import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productToAdd : Produit = {} as Produit
  addError : boolean = false
  showForm : boolean = false
  products : Produit [] = []
  constructor(private prodServ : ProductService) { }

  loadProducts(){

  }
  ngOnInit() {
    this.prodServ.getAll().subscribe((res : Produit[])=>{
      if(res) this.products = res
    },err=>{
      this.products = []
    })
  }
  submit(f:NgForm){
    console.log(f)
    if(f.valid && this.productToAdd){
      this.prodServ.addProduct(this.productToAdd).subscribe((res)=>{
        if(res) window.location.reload()
      },error=>{
        this.addError = true
      } )
    }
  }
  filterProducts(content){
    if(content){
      this.products = this.products.filter(x=>x.libelle.toLowerCase().indexOf(content.toLowerCase()) != -1 ||x.libelle.toLowerCase().includes(content.toLowerCase()))
    }
    else this.ngOnInit()
  }
}
