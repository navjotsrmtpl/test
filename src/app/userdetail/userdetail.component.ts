import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent {
  userlist: any=[];
  @Input() userInformation;
  message:any;

  constructor(private service:ServiceService) {

   }

  ngOnChanges(){
      this.userlist = this.userInformation;
  }

  setMessage(event){
    console.log(event);
    this.message= event;
    debugger;
    this.service.setMessage(this.message);

  }

}
