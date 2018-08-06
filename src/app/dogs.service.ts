import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private _http: Http) { }

  get() {
    return this._http.get('https://dog.ceo/api/breeds/image/random');
  }
}
