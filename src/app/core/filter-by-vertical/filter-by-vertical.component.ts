import { Component, OnInit } from '@angular/core';
import { ShairedService } from './../../shared/services/shaired.service';

@Component({
  selector: 'app-filter-by-vertical',
  templateUrl: './filter-by-vertical.component.html',
  styleUrls: ['./filter-by-vertical.component.css']
})
export class FilterByVerticalComponent implements OnInit {
  SalesReps = new Set();
  constructor(private shairedService: ShairedService) { }

  ngOnInit() {
    this.shairedService.$saleDetailsList.subscribe(data => {
      this.SalesReps.clear();
   data.forEach(sale => {
    this.SalesReps.add(sale.SalesRep);
   });
    });
  }

}
