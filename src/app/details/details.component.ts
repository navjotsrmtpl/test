import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private apiservice:ServiceService) { }

  ngOnInit(): void {

    this.getDetails();
  }


  getDetails(){
    this.apiservice.getData().subscribe(res=>{
      console.log(res);

    })
  }

}
