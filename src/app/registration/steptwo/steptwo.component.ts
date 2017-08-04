import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-step-two',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css'],
})
export class SteptwoComponent implements OnInit {

  specialties = [
    {
      name: "EENT"
    },
    {
      name: "Neurologist"
    }
  ];

  selectedSpecialty = "Select fields of Specialty";

  constructor() { }

  ngOnInit() {

  }

  onSelectedSpecialty(specialty: string) {
    this.selectedSpecialty = specialty;
  }


}
