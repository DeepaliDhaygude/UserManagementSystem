import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  // Data Type  - string, number, date
  firstName : string; // way 1
  middleName : string = ""; // way 2
  lastName : string;
  rollNumber : number;
  pieValue : number;
  currentDate :Date;
  isIndian : boolean;

  arr1 : number[]; // Array

  //Object
  studentObj = {
    fname : "Krisha",
    lname : "Lavate",
    rollNumber : 1
  };

  //Array of Objects
  empObj =[
    {
      fname : "abc",
      lname : "xxx",
      address:"",
      pin: 123
    },
    {
      fname : "xyz",
      lname : "yyy",
      address:"",
      pin: 123
    },
    {
      fname : "pqr",
      lname : "zzz",
      address:"",
      pin: 123
    }
  ];

  constructor() {
    this.firstName="Abc";
    this.middleName="Pqr";
    this.lastName = "Xyz";
    this.rollNumber=123;
    this.currentDate = new Date();
    this.pieValue = 3.14;
    this.isIndian = true;
    this.arr1 = [1,2,3,4,5];
  }

  ngOnInit(): void {
  }

}
