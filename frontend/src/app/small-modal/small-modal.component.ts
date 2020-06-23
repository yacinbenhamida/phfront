import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.css']
})
export class SmallModalComponent implements OnInit {
  @Input() contenu : string
  @Input() titre : string 
  constructor() { }

  ngOnInit() {
  }

}
