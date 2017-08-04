import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  step = 1;

  displayStepOne = "block";
  displayStepTwo = "none";
  displayStepThree = "none";

  modelStepOne: {};

  constructor() { }

  ngOnInit() {
  
  }

  checkStepOne(formObject) {
    if(formObject.valid) {
      this.step = 2

      this.modelStepOne = formObject.model;

      this.displayStepOne = "none";
      this.displayStepTwo = "block";
      this.displayStepThree = "none";      
    } 
    else {
      this.step = 1;
      this.displayStepOne = "block";
      this.displayStepTwo = "none";
      this.displayStepThree = "none";       
    }
  }

}
