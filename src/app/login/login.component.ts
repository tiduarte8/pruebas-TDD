import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  text='login';
  users;

  loginForm:FormGroup;
  contact={
 
   email:'',
   pass:''
  };
  submitted=false;



  constructor() {
    this.createForm()
    
 }
 createForm():void{
  this.loginForm=new FormGroup({
    'email':new FormControl(this.contact.email,[
      Validators.required,
      Validators.minLength(4)
    ]),
    
    'pass':new FormControl(this.contact.pass,Validators.required)
  });
}

onSubmit():void{
 this.submitted=true;
}





}
