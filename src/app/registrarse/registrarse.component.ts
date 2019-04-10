import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent{

  text='Registrarse';
  users;

  registrarseForm:FormGroup;
  usuario={
   name:'',
   apellido:'',
   nocedula:'',
   email:'',
   telefono:'',
   contra:'',
   direccion:''
  };
  submitted=false;


  constructor() {
     this.createForm()
     
  }

  createForm():void{
    this.registrarseForm=new FormGroup({
      'name':new FormControl(this.usuario.name,[
        Validators.required,
        Validators.minLength(1)
      ]),
      'email':new FormControl(this.usuario.email,[
        Validators.required,
        Validators.email
      ]),
      'dir':new FormControl(this.usuario.direccion,Validators.required),
      'telefono':new FormControl(this.usuario.telefono,Validators.required),
      'nocedula':new FormControl(this.usuario.nocedula,Validators.required),
      'apellido':new FormControl(this.usuario.apellido,Validators.required),
      'contra':new FormControl(this.usuario.contra,Validators.required)
    });
  }

  onSubmit():void{
   this.submitted=true;
  }
 
}
