import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

    isDiv1Visible :boolean = true;
    isDiv4Visible :boolean = true;
    name : string = "demo";
    surname : string = "demo1";

    isListView : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv3(){
    let element = document.getElementById("div3");
    if(element!=null){
      element.style.display = "none";
    }
  }

  showDiv3(){
    let element = document.getElementById("div3");
    if(element!=null){
      element.style.display = "block";
    }
  }

  toggleDiv4(){
    // 1. method I
    // if(this.isDiv4Visible == true){
    //   this.isDiv4Visible = false;
    // }
    // else{
    //   this.isDiv4Visible = true;
    // }
    // }

    // 2. Method II
    // this.isDiv4Visible == true ? false : true;

    // 3. Method III
    this.isDiv4Visible = ! this.isDiv4Visible;
  }

  onAdd(){
    this.isListView = false;
  }
  goBack(){
    this.isListView = true;
  }
}
