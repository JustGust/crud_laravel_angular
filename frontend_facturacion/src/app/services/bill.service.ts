import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Seller } from "../model/seller";
import { Buyer } from "../model/buyer";
import { Item } from "../model/item";
import { SaveBillComponent } from "../board/save-bill/save-bill.component";
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  private env: string = '';
  private idUser: number = 42130;

  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
   }

   registerBill(bill: any){
    return this._http.post<any>(this.env + 'bill', bill);
  }

  getSeller(){
    return this._http.get<Seller[]>(this.env + 'seller')
    .pipe(
    )
  }

  getBuyer(){
    return this._http.get<Buyer[]>(this.env + 'buyer')
    .pipe(
    )
  }

}
