import { Injectable } from '@angular/core';
import { Tickermodel } from './model/tickermodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickermainService {

  constructor(private http: HttpClient) { }
  private _url : string = 'http://localhost:8099/user/ticker';

  getTickerList() : Observable<Tickermodel[]>{
    return this.http.get<Tickermodel[]>(this._url); 
  }
}
