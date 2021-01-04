import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  getUsers() {

    let params = new HttpParams().append('page', '2');
    params = params.append('name', 'test name');

    return this.http.get(`https://reqres.in/api/user`,
      { params
      }).pipe(
        map( res => res['data']),
      );
  }



}
