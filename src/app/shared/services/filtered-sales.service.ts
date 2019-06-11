import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleDetailsWrapper } from '../models/SaleDetailsWrapper';
import { AppSettings } from 'src/app/appSettings';

@Injectable({
  providedIn: 'root'
})
export class FilteredSalesService {

  private getFilteredSaleService_URL = 'https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/filter-by-date-and-vertical';

  constructor(private http: HttpClient) { }

  public getFilteredSales(period: String, vertical: String): Observable<SaleDetailsWrapper> {
    const url = encodeURI(this.getFilteredSaleService_URL + '?dateFilter=' + period + '&=verticalFilter=' + vertical);
    return this.http.get<SaleDetailsWrapper>(url, AppSettings.HTTP_OPTIONS);
  }

}
