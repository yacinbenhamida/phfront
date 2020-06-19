import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-fiches',
  templateUrl: './historique-fiches.component.html',
  styleUrls: ['./historique-fiches.component.css']
})
export class HistoriqueFichesComponent implements OnInit {
  public data = [
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
];

  constructor() { }

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}


}
