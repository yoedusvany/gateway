import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GLOBALS_VAR } from '../../config';
import { Observable } from 'rxjs';
import { DeviceI } from '../interfaces/device';
import { ResultI } from '../interfaces/result';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devices : DeviceI[] = [];
  private url     : string = GLOBALS_VAR.url+'device';

  constructor(private http: HttpClient) { }

  getDevices(gwId: String): Observable<DeviceI[]>{
    return this.http.get<DeviceI[]>(this.url+'s/'+gwId);
  }

  addDevice(data): Observable<ResultI>{
    return this.http.post<ResultI>(this.url, data);
  }

  removeDevice(id): Observable<ResultI>{
    return this.http.delete<ResultI>(this.url+'/'+id);
  }
}
