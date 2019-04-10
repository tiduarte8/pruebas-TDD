import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseComponent } from './registrarse.component';


import {BrowserModule,By} from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {DebugElement} from '@angular/core';


import { createComponent } from '@angular/compiler/src/core';

describe('RegistrarseComponent', () => {
  let comp: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarseComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(()=>{fixture=TestBed.createComponent(RegistrarseComponent);
    comp=fixture.componentInstance;
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
    });
  }));
  
  it(`should call d onSubmit method`,async( () => {
    fixture.detectChanges();
    spyOn(comp,'onSubmit');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();

    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));
 

  it(`should have a text 'Registrarse'`,async( () => {
    expect(comp.text).toEqual('Registrarse');
  }));

  it(`should set submteed to true`,async( () => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));



  it(`form should be invalid`,async( () => {
    comp.registrarseForm.controls['email'].setValue('');
    comp.registrarseForm.controls['name'].setValue('');
    comp.registrarseForm.controls['apellido'].setValue('');
    comp.registrarseForm.controls['nocedula'].setValue('');
    comp.registrarseForm.controls['telefono'].setValue('');
    comp.registrarseForm.controls['contra'].setValue('');
    comp.registrarseForm.controls['dir'].setValue('');
    expect(comp.registrarseForm.valid).toBeFalsy();
  }));

  
  it(`form should be invalid`,async( () => {
    comp.registrarseForm.controls['email'].setValue('tiduarte1993@gmail.com');
    comp.registrarseForm.controls['name'].setValue('Tito');
    comp.registrarseForm.controls['apellido'].setValue('Duarte');
    comp.registrarseForm.controls['nocedula'].setValue('128-080893-0000Q');
    comp.registrarseForm.controls['telefono'].setValue('87465486');
    comp.registrarseForm.controls['contra'].setValue('tito1993');
    comp.registrarseForm.controls['dir'].setValue('Comalapa Ch');
    expect(comp.registrarseForm.valid).toBeTruthy();
  }));



});

