import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currencycal';

  Cus_basket = [
    { product: 'item 1', price: 1 },
    { product: 'item 2', price: 5 },
    { product: 'item 3', price: 42 },
    { product: 'item 4', price: 1533 },
  ];

  Curr_exch: any = [];
  Selected_cur:any="";

  constructor(private  api_service:ApiService) {}

  ngOnInit(): void {

    //Conversion rates array as per malaysian currency
    this.Curr_exch = [
      { Currency: 'rubbles', Symb: "RUB" },
      { Currency: 'euros', Symb: "EUR" },
      { Currency: 'USD', Symb: "USD" },
      { Currency: 'pounds', Symb: "GBP" },
      { Currency: 'yens', Symb: "JPY" },
    ];


  }

  Displayedcolumns: string[] = ['product', 'price'];

  Currency_change(val: any) {
   console.log(val.target.value);

    let NewArr:any =[];
    let Conversion_rate:any=0;
    //Code to refresh array
    this.Cus_basket = [
      { product: 'item 1', price: 1 },
      { product: 'item 2', price: 5 },
      { product: 'item 3', price: 42 },
      { product: 'item 4', price: 1533 },
    ];

    this.api_service.Currency_conversion('MYR',val.target.value).subscribe((res:any)=>{

      Conversion_rate=res.result;
      //Code to calculate on selected currency
      this.Cus_basket = this.Cus_basket.map((obj: any) => {
        return { ...obj, price: obj.price * Conversion_rate };
        return obj;
      });

      console.log(this.Cus_basket);

    })



  }
}
