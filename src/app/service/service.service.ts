import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public message= new Subject<string>();
  user: any;


  constructor(private http:HttpClient) {
  }

  setMessage(value:string){
    debugger;
    this.message.next(value);
  }

  token(){

  }

  api(data){
    let headers= new HttpHeaders();
    console.log(headers);

    return this.http.post('https://testapi.techcellence.com/auth/local',data,{headers:headers});
  }

  getData(){
    this.user= localStorage.getItem('user')
    console.log(this.user);
    var headers = new HttpHeaders().set("Authorization", "Bearer " + this.user);
    return this.http.get("https://testapi.techcellence.com/books",{headers:headers})
  }
}
