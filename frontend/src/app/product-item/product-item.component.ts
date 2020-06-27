import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product : Produit
  constructor() { }

  ngOnInit() {
  }

}
