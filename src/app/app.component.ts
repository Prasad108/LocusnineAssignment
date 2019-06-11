import { Component, OnInit } from '@angular/core';
import { SaleDetailsService } from './shared/services/sale-details.service';
import { ShairedService } from './shared/services/shaired.service';
import { SaleDetails } from './shared/models/SaleDetails';
import { FilteredSalesService } from './shared/services/filtered-sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  SaleDetailsList: SaleDetails[];
  title = 'SalesAppClient';
  constructor(private saleDetailsService: SaleDetailsService,
              private shairedService: ShairedService,
              private filteredSalesService: FilteredSalesService ) {
  }
  ngOnInit(): void {
    this.saleDetailsService.getAllSalesDetails().subscribe(data => {
      this.shairedService.updateSaleDetailsList(data.Items);
    },
    error => console.log(error));

    this.shairedService.$saleDetailsList.subscribe(data => this.SaleDetailsList = data);
    this.shairedService.$dateFilter.subscribe(data => this.getFilteredSales());
    this.shairedService.$vectorFilter.subscribe(data => this.getFilteredSales());
  }

  getFilteredSales() {
    this.filteredSalesService.getFilteredSales(this.shairedService.dateFilter, this.shairedService.vectorFilter)
    .subscribe(data => this.shairedService.updateSaleDetailsList(data.Items));
  }
}
