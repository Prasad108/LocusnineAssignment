import { Component, OnInit } from '@angular/core';
import { ShairedService } from 'src/app/shared/services/shaired.service';
import { SaleDetails } from './../../shared/models/SaleDetails';

@Component({
  selector: 'app-sale-details-table',
  templateUrl: './sale-details-table.component.html',
  styleUrls: ['./sale-details-table.component.css']
})
export class SaleDetailsTableComponent implements OnInit {

  SaleDetailsList: SaleDetails[];
  constructor(private shairedService: ShairedService) { }

  ngOnInit() {
    // whenever saleDetailsList list is updated re-render table
    this.shairedService.$saleDetailsList.subscribe(data => this.SaleDetailsList = data);
  }

}
