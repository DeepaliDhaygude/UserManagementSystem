import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  rollNumber : number;
  result : number;
  num1 : number =12;
  num2 : number =12;

  constructor() {
    this.rollNumber = 1;
    this.result = 0;
    // this.num1=0;
    // this.num2=0;
   }

  ngOnInit(): void {
  }

  onIncrement(){
    this.rollNumber = this.rollNumber + 1;
  }
  onDecrement(){
    this.rollNumber = this.rollNumber - 1;
  }

  onCityChange(){
    alert('city changed!!!')
  }

  clearForm(){
    this.num1=0;
    this.num2=0;
    this.result=0;
  }
  onAdd(){
    this.result = Number(this.num1) + Number(this.num2);
  }
  onSubtract(){
    this.result = Number(this.num1) - Number(this.num2);
  }
  onMultiply(){
    this.result = Number(this.num1) * Number(this.num2);
  }
  onDivide(){
    this.result = Number(this.num1) / Number(this.num2);
  }
}
