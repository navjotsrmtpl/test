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
  userData :any;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.userlist();

  }

  userlist(){
    this.service.api().subscribe((res:any)=>{
      console.log(res);
      this.userslist= res;
    })
  }

  gotoDetails(data:any){
    this.userData = data;
    // this.router.navigate(['/user-list'],{queryParams:{'id':data.id}})

  }

}
