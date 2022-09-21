import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-example1',
  templateUrl: './ngif-example1.component.html',
  styleUrls: ['./ngif-example1.component.css']
})
export class NgifExample1Component implements OnInit {

  studentList : any[];
  isShow : boolean;
  constructor() {
    this.studentList =[];
    this.isShow=false;
   }

  ngOnInit(): void {
    this.studentList=[
      {name:'Deepali',city:'Pune',stream:'IT',isActive:true,gender:'Female'},
      {name:'Krisha',city:'Mumbai',stream:'Electrical',isActive:false,gender:'Female'},
      {name:'Ujjwal',city:'Solapur',stream:'Electrical',isActive:true,gender:'Male'},
      {name:'Shiv',city:'Nashik',stream:'Mech',isActive:false,gender:'Male'},
      {name:'Shobha',city:'Thane',stream:'Mech',isActive:true,gender:'Female'},
      {name:'Rajendra',city:'Nagpur',stream:'C-Tec',isActive:true,gender:'Male'},
      {name:'Guru',city:'Sangli',stream:'IT',isActive:false,gender:'Male'}

    ];
  }

  show(){
    this.isShow=true;
  }
  hide(){
    this.isShow=false;
  }
  getVisibleValue(){
    return this.isShow;
  }
}
