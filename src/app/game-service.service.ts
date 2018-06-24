import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IgameActual } from './game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  private _url:string = "http://localhost/CRUDapi.php?option=getNumberGame";

  getGameActual(): Observable<IgameActual[]>{
    var body = {"oon":"getNumberGame"}
    return this.http.get<IgameActual[]>(this._url)
  }
}
