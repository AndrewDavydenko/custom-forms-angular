import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/main';

@Injectable()
export class FieldService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/fields`);
  }

  public post(body: any): Observable<any> {
    return this.httpClient.post(`${BASE_URL}/registration`, { body });
  }
}
