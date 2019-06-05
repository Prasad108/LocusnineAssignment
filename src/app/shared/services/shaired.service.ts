import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { SaleDetails } from '../models/SaleDetails';


@Injectable({
  providedIn: 'root'
})
export class ShairedService {
  saleDetailsList: SaleDetails[];
  public $saleDetailsList: Subject<SaleDetails[]> = new Subject<SaleDetails[]>();

  constructor() {
    this.$saleDetailsList.subscribe(data => this.saleDetailsList = data);
  }
  updateSaleDetailsList(data: SaleDetails[]) {
    this.saleDetailsList = data;
    this.$saleDetailsList.next(data);
  }
}
