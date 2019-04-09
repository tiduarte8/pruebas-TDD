import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule,By} from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {DebugElement} from '@angular/core';
import { ContactComponent } from './contact.component';

import { createComponent } from '@angular/compiler/src/core';

fdescribe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(()=>{fixture=TestBed.createComponent(ContactComponent);
    comp=fixture.componentInstance;
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
    });
  }));
  

 

  it(`should have a text 'contact-page'`,async( () => {
    expect(comp.text).toEqual('contact-page');
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
    comp.contactForm.controls['email'].setValue('');
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['text'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  
  it(`form should be invalid`,async( () => {
    comp.contactForm.controls['email'].setValue('tiduarte@gmai.com');
    comp.contactForm.controls['name'].setValue('Tito Duarte');
    comp.contactForm.controls['text'].setValue('hola');
    expect(comp.contactForm.valid).toBeTruthy();
  }));



});

