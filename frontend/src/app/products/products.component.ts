import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productToAdd : Produit = {} as Produit
  constructor() { }

  ngOnInit() {
  }

}
