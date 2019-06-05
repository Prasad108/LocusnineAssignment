import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
    public static HTTP_OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'
     })
    };
 }
