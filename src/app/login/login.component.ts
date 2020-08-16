import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;

  data:any={
    identifier:'',
    password:''
  }
  subscription: Subscription;
  message: any;

  constructor(private apiservice:ServiceService,private route:Router) { }

  ngOnInit() {
    this.subscription = this.apiservice.message.subscribe(
      (message) => {
        debugger;
        this.message = message;
      }
    );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  login(){
    console.log("login works");


    this.apiservice.api(this.data).subscribe((res:any)=>{
      console.log(res);
      if(res){
        localStorage.setItem('user',res.jwt);
        this.route.navigate(["/details"])
      }else{
        console.log("wrong credentials");

      }

    },err=>{
        console.log(err);

    })

  }



}
