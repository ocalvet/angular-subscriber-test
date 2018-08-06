import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get('https://dog.ceo/api/breeds/image/random');
  }
}
