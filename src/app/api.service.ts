
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const endpoint = 'http://localhost:3000/api/';

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

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getMobs(): Observable<any> {
    return this.http.get<mobs>(endpoint + 'mobs',optionRequete).pipe(
      catchError(this.handleError)
    );
  }

  getMob(id: string): Observable<any> {
    return this.http.get<mobs>(endpoint + 'mob/' + id, optionRequete).pipe(
      catchError(this.handleError)
    );
  }
}

