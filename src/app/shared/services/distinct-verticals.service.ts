import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/appSettings';

@Injectable({
  providedIn: 'root'
})
export class DistinctVerticalsService {

  private getDisticVerticals_URL = 'https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/distinct-verticals';

  constructor(private http: HttpClient) { }

  public getDistinctVerticals(): Observable<String[]> {
    return this.http.get<String[]>(this.getDisticVerticals_URL, AppSettings.HTTP_OPTIONS);
  }

}
