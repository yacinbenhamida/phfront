import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product : Produit
@Output() productOperation = new EventEmitter<any>()
isSelected : boolean = false
  constructor() { }

  ngOnInit() {
  }
  deleteProduct(){
    this.isSelected = true
    this.productOperation.emit({product : this.product, 'op' : 'del'})
  }
  editProduct(){
    this.isSelected = true
    this.productOperation.emit({product : this.product , 'op' : 'edit'})
  }

}
