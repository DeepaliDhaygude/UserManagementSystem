import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  studentObj :any;
  constructor() {
    this.studentObj ={
      name : 'Deepali',
      surname : 'Dhaygude',
      rollNumber : 2,
      isIndian : true,
      dob : new Date('1993-01-08'),
      contactArray:[
        "1234567890",
        "0987654321"
      ],
      address:{
        addressLine1:"Near Veg Culture Hotel,",
        addressLine2:"Manikbaug,",
        city:"Pune",
        pin : 413110
      }

    };
   }

  ngOnInit(): void {
  }

}
