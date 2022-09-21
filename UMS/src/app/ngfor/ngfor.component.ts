import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cityArray:string[];
  studentList:any[];
  city:string;
  constructor() {
    this.city='';
    this.cityArray = ['Pune', 'Solapur', 'Nagpur','Mumbai','Panji']
    this.studentList=[
      {
        name : "Deepali",
        city:"Pune",
        mobile:"1111111111"
      },
      {
        name : "Krisha",
        city:"Pune",
        mobile:"2222222222"
      },
      {
        name : "abc",
        city:"Solapur",
        mobile:"3333333333"
      },
      {
        name : "xyz",
        city:"Nashik",
        mobile:"4444444444"
      }
    ];
   }

  ngOnInit(): void {
  }

  onAddCity(){
    this.cityArray.push(this.city);

  }

}
