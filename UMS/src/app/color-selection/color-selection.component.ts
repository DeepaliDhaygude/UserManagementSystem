import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selection',
  templateUrl: './color-selection.component.html',
  styleUrls: ['./color-selection.component.css']
})
export class ColorSelectionComponent implements OnInit {

  isDiv1Visible:boolean=false;
  mySelectedColor:string ='';
  myClass:string='';

  themeBorder:string ='';
  themeStr:string='';
  themeCard:string='';
  themeCardHead:string='';
  str1:string='';
  isSidePanelOpen:boolean=false;

  email:string='';
  pwd:string='';
  constructor() { }

  ngOnInit(): void {
  }
  addDiv1Class(){
    this.isDiv1Visible=true;
  }
  removeDiv1Class(){
    this.isDiv1Visible=false;
  }
  onAddShow(){
    debugger;
this.isSidePanelOpen=true;
  }
  onSidePanelClose(){
    debugger;
    this.isSidePanelOpen=false;

  }
  onTheme(){
    debugger;
  this.str1=this.themeCardHead.slice(3);
  console.log(this.str1);
  this.themeBorder = "border border-"+this.str1;
   console.log(this.themeBorder);

  }
}
