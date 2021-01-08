
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const endpoint = 'http://pt.ts.abourneron.fr:8081/api/';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

export interface mobs {
  _id: string;
  name: string;
  status: string;
  desc: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { 
  }

  public getMobs(): Observable<mobs> {
    return this.http.get<mobs>(endpoint + 'mobs',optionRequete)
  }

  public getMob(id: string): Observable<mobs> {
    return this.http.get<mobs>(endpoint + 'mob/' + id, optionRequete)
  }
}

