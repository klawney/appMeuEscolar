import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient ) { }

  getg() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
