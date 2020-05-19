import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  userslist: any;
  services: any;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.userlist();

  }

  userlist(){
   this.services =  this.service.api().subscribe((res:any)=>{
      console.log(res);
      this.userslist= res;
    })
  }

  gotoDetails(data:any){

    this.router.navigate(['/user-detail'],{queryParams:{'id':data.id}})

  }

}
