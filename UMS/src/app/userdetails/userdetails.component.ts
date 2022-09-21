import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  themeBorder:string ='';
  themeStr:string='';
  themeCard:string='';
  themeCardHead:string='';
  str1:string='';

  empTable : boolean = false;
  counter:number =0;
  txtFirstName : string;
  txtLastName : string;
  txtTechnology : string;
  txtDesignation:string;
  txtSkills:string;
  txtCoreExpertise:string;
  txtCertifications:string;
  txtCertificationsType:string;
  txtCompany:string;
  txtDescription:string;
  empArray:any =[];
  empObj:any={
    fname : "",
    lname : "",
    tech : "",
    design :"",
    skills : "",
    expertise :"",
    certifications:"",
    certificationsType:"",
    company : "",
    description:""
  };

  constructor() {
    this.txtFirstName = "";
    this.txtLastName = "";
    this.txtTechnology = "";
    this.txtDesignation ="";
    this.txtSkills="";
    this.txtCoreExpertise="";
    this.txtCertifications="";
    this.txtCertificationsType="",
    this.txtCompany="";
    this.txtDescription=""

  }


  ngOnInit(): void {
  }
  saveData(){
    debugger;
    this.empObj ={
      fname:this.txtFirstName,
    lname:this.txtLastName,
    tech:this.txtTechnology,
    design:this.txtDesignation,
    skills:this.txtSkills,
    expertise:this.txtCoreExpertise,
    certifications:this.txtCertifications,
    certificationsType:this.txtCertificationsType,
    company:this.txtCompany,
    description:this.txtDescription
    }

    this.empTable=true;
    this.empArray.push(this.empObj);
    this.onCancel();
  }

  onCancel(){
    this.txtFirstName = "";
    this.txtLastName = "";
    this.txtTechnology = "";
    this.txtDesignation ="";
    this.txtSkills="";
    this.txtCoreExpertise="";
    this.txtCertifications="";
    this.txtCertificationsType="",
    this.txtCompany="";
    this.txtDescription="";

  }
  goBack(){
    this.empTable = false;
  }
  onTheme(){
    debugger;
  this.str1=this.themeCardHead.slice(3);
  console.log(this.str1);
  this.themeBorder = "border border-"+this.str1;
   console.log(this.themeBorder);

  }
}
