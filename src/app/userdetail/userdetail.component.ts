import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  id: any;
  userlist: any=[];
  profileForm:any;
  @Input() userInformation;
  @Input() test;

  constructor(private route:ActivatedRoute,private service:ServiceService,private router:Router, private location:Location) {

   }

  ngOnInit(){

      this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params.id;
        this.service.api().subscribe((res:any)=>{
          this.userlist = res;
          this.userlist=this.userlist.filter(x=>x.id==this.id);

        })
      });
      // this.userlist = [];
      // this.userlist = this.userInformation;
      // console.log(this.userlist , 'jkhkjhkjhkjhkjh')

  }

  back(){
    this.location.back();
  }

}
