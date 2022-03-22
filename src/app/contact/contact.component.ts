import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RegisterStudent(studentForm:NgForm):void

  {
  
   console.log(studentForm.value)
  
   
  
   var first_name=studentForm.controls.firstName.value;
  
   var last_name=studentForm.controls.lastName.value;
  
   var email=studentForm.controls.email.value;
  
  
  
  console.log(first_name);
  
  console.log(last_name);
  
  console.log(email);
  
  }
  
  }
