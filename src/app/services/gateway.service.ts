import { Injectable } from '@angular/core';
import { GatewayI } from '../interfaces/gateway';
import { HttpClient } from '@angular/common/http';
import { GLOBALS_VAR } from '../../config';
import { Observable } from 'rxjs';
import { ResultI } from '../interfaces/result';

@Injectable({
  providedIn: 'root'
})

export class GatewayService {
  private gateways: GatewayI[] = [];
  private url     : string = GLOBALS_VAR.url+'gateway';

  constructor(private http: HttpClient) { }


  getAll(): Observable<GatewayI[]> {
    return this.http.get<GatewayI[]>(this.url);
  }

  get(id: String): Observable<GatewayI>{
    return this.http.get<GatewayI>(this.url+'/'+id)
  }

  addGateway(data): Observable<ResultI>{
    return this.http.post<ResultI>(this.url, data)
  }

  removeGateway(id): Observable<ResultI>{
    return this.http.delete<ResultI>(this.url+"/"+id)
  }



}
