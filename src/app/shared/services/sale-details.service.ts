import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleDetailsWrapper } from '../models/SaleDetailsWrapper';
import { AppSettings } from 'src/app/appSettings';

@Injectable({
  providedIn: 'root'
})
export class SaleDetailsService {
  private getAllSaleDetails_URL = 'https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/sales';

  constructor(private http: HttpClient) { }

  public getAllSalesDetails(): Observable<SaleDetailsWrapper> {
    return this.http.get<SaleDetailsWrapper>(this.getAllSaleDetails_URL, AppSettings.HTTP_OPTIONS);
  }
}
