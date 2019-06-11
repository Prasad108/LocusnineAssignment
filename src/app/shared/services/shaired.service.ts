import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { SaleDetails } from '../models/SaleDetails';


@Injectable({
  providedIn: 'root'
})
export class ShairedService {
  saleDetailsList: SaleDetails[];
  public $saleDetailsList: Subject<SaleDetails[]> = new Subject<SaleDetails[]>();

  dateFilter: String = 'this_year';
  public $dateFilter: Subject<String> = new Subject<String>();

  vectorFilter: String = 'all';
  public $vectorFilter: Subject<String> = new Subject<String>();


  constructor() {
    this.$saleDetailsList.subscribe(data => this.saleDetailsList = data);
    this.$dateFilter.subscribe(data => this.dateFilter = data);
    this.$vectorFilter.subscribe(data => this.vectorFilter = data);
  }
  updateSaleDetailsList(data: SaleDetails[]) {
    this.saleDetailsList = data;
    this.$saleDetailsList.next(data);
  }
  updateDateFilter(data: String) {
    this.dateFilter = data;
    this.$dateFilter.next(data);
  }

  updateVectorFilter(data: String) {
    this.dateFilter = data;
    this.$vectorFilter.next(data);
  }
}
