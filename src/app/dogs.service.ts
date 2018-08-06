import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Dog } from './Dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  // constructor(private _http: Http) { }
  constructor(private _http: HttpClient){ }

  get(): Observable<Dog> {
    return this
      ._http
      .get('https://dog.ceo/api/breeds/image/random')
      .pipe(map((response: any) => {
        return new Dog(response.message);
      }));
  }
}
