import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private env: string = '';

  constructor(private _http: HttpClient) { 
    this.env = environment.APP_URL;
  }

  registerItem(item: any){
    return this._http.post<any>(this.env + 'item', item);
  }

  getItem(idB: number){    
    return this._http.get<Item[]>(this.env +  'item/' + idB)
    .pipe(
    )
  }

  getTotalPay(idB: number){    
    return this._http.get<Item[]>(this.env +  'item/total/' + idB)
    .pipe(
    )
  }

  delete(id: number){
    return this._http.get<Item>(this.env + 'item/delete/' + id)
    .pipe(
    )
  }

}
