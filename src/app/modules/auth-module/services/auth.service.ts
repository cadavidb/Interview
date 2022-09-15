import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  getCities():Observable<any>{
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');
  }
  getData():Observable<any>{
    return this.http.get(`/assets/data/data.json`);
  }
}
