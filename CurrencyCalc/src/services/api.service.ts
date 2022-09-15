import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiEndPoint:string="https://api.apilayer.com/exchangerates_data";

  constructor(private http: HttpClient) {

  }


  Currency_conversion(From_cur:any,To_cur:any)
  {

    let custm_headers = new HttpHeaders({
      'apikey': 'tlN3uG8djTS2uEFkx2p5Hq9UoA8C7vr4'});

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: custm_headers
    };

    return this.http.get(`${this.apiEndPoint}/convert?to=${To_cur}&from=${From_cur}&amount=1`,requestOptions);
  }

}
