import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

}
