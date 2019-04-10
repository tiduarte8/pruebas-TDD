import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule,By} from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {DebugElement} from '@angular/core';
import { LoginComponent } from './login.component';

import { createComponent } from '@angular/compiler/src/core';

describe('LoginComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(()=>{fixture=TestBed.createComponent(LoginComponent);
    comp=fixture.componentInstance;
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
    });
  }));
  

 

  it(`should have a text 'contact-page'`,async( () => {
    expect(comp.text).toEqual('login');
  }));

  it(`should set submteed to true`,async( () => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`should call d ons=Submit method`,async( () => {
    fixture.detectChanges();
    spyOn(comp,'onSubmit');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();

    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`,async( () => {
    comp.loginForm.controls['email'].setValue('');
   
    comp.loginForm.controls['pass'].setValue('');
    expect(comp.loginForm.valid).toBeFalsy();
  }));

  
  it(`form should be valid`,async( () => {
    comp.loginForm.controls['email'].setValue('tiduarte@gmai.com');
   
    comp.loginForm.controls['pass'].setValue('tito1993');
    expect(comp.loginForm.valid).toBeTruthy();
  }));



});


