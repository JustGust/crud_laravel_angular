import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Seller } from "../model/seller";
import { Buyer } from "../model/buyer";
import { Bill } from "../model/bill";


@Injectable({
  providedIn: 'root'
})
export class BillService {

  private env: string = '';


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

  getBill(id: number){
    return this._http.get<Bill[]>(this.env + 'bill/' + id)
    .pipe(
    )
  }

  getAllBill(){
    return this._http.get<Bill[]>(this.env + 'bill')
    .pipe(
    )
  }
  delete(id: number){
    return this._http.get<Bill>(this.env + 'bill/delete/' + id)
    .pipe(
    )
  }

}
