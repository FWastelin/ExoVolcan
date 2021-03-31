import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volcan } from '../models/volcan.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolcanService {

  constructor(private _client : HttpClient) { }

  getAll(url : string ) : Observable<Volcan[]>{
    return this._client.get<Volcan[]>(url);
  }
  getById(id : number, url : string) : Observable<Volcan>{
    return this._client.get<Volcan>(`${url}/${id}`);
  }
}
