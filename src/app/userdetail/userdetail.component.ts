import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent {
  userlist: any=[];
  @Input() userInformation;

  constructor() {

   }

  ngOnChanges(){
      this.userlist = this.userInformation;
  }

}
