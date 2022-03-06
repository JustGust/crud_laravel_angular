import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private env: string = '';

  constructor( private _http: HttpClient) {
    this.env = environment.APP_URL;
   }

   registerUser(user: any){
     return this._http.post<any>(this.env + 'auth/register', user);
   }

   login(user: any){
    return this._http.post<any>(this.env + 'auth/login', user);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return !!localStorage.getItem('token'); // return true o false
  }

  logout(){
    localStorage.removeItem('token')
  }

}
