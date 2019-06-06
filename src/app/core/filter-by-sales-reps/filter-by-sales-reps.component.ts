import { Component, OnInit } from '@angular/core';
import { ShairedService } from 'src/app/shared/services/shaired.service';

@Component({
  selector: 'app-filter-by-sales-reps',
  templateUrl: './filter-by-sales-reps.component.html',
  styleUrls: ['./filter-by-sales-reps.component.css']
})
export class FilterBySalesRepsComponent implements OnInit {
  // SalesReps: String[];
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
