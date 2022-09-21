import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-of-objects',
  templateUrl: './array-of-objects.component.html',
  styleUrls: ['./array-of-objects.component.css']
})
export class ArrayOfObjectsComponent implements OnInit {
  myname:string="";
  mobile:string="";
  addr:string="";
  info:any={};
  infoArray:any[];
  constructor() {
    this.info={
      myname:"",
      addr:"",
      mobile:""
    }
    this.infoArray=[];
   }

  ngOnInit(): void {
  }
  onAdd(){
    debugger;
    this.info={
      myname:this.myname,
    mobile:this.mobile,
    addr:this.addr
    };

    // this.infoArray.push(this.info);
  this.infoArray.push(this.info);

  }

}
