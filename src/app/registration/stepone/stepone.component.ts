import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'register-step-one',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent implements OnInit {

  model = { firstName: "", lastName: "", middleName: "", birthDate: "" };

  firstNameCSS = "form-control";
  middleNameCSS = "form-control";
  lastNameCSS = "form-control";
  birthDateCSS = "form-control";

  @Output() onPageValidation = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {

  }

  validateFirstName() {
    if(this.model.firstName.length == 0) {
      this.firstNameCSS = "form-control input-error";
    }
    else {
      this.firstNameCSS = "form-control";
    }    
  }

  validateMiddleName() {
    if(this.model.middleName.length == 0) {
      this.middleNameCSS = "form-control input-error";
    }
    else {
      this.middleNameCSS = "form-control";
    }    
  }  

  validateLastName() {
    if(this.model.lastName.length == 0) {
      this.lastNameCSS = "form-control input-error";
    }
    else {
      this.lastNameCSS = "form-control";
    }    
  }

  validateBirthDate() {
    if(this.model.birthDate.length == 0) {
      this.birthDateCSS = "form-control input-error";
    }
    else {
      if(!this.validateDate(this.model.birthDate)) {
        this.birthDateCSS = "form-control input-error";
      }
      else {
        this.birthDateCSS = "form-control";
      }
    }
  }  

  moveNext() {
    this.validateFirstName();
    this.validateMiddleName();
    this.validateLastName();
    this.validateBirthDate();

    if(this.firstNameCSS.indexOf("error") > -1 ||
        this.middleNameCSS.indexOf("error") > -1 ||
          this.lastNameCSS.indexOf("error") >- 1 ||
            this.birthDateCSS.indexOf("error") >- 1) {
              this.onPageValidation.emit({ valid: false, model: this.model });
            }
    else {
      this.onPageValidation.emit({ valid: true, model: this.model });
    }
  }

  validateDate(dateValue) {
    let selectedDate = dateValue;
    if(selectedDate == '')
        return false;

    let regExp = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    let dateArray = selectedDate.match(regExp); // is format OK?

    if (dateArray == null){
        return false;
    }

    let month = dateArray[1];
    let day= dateArray[3];
    let year = dateArray[5];        

    if (month < 1 || month > 12){
        return false;
    }else if (day < 1 || day> 31){ 
        return false;
    }else if ((month==4 || month==6 || month==9 || month==11) && day ==31){
        return false;
    }else if (month == 2){
        var isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day> 29 || (day ==29 && !isLeapYear)){
            return false
        }
    }
    return true;
}

}
