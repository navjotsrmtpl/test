import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  api(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
