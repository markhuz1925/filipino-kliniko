import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Output() validateStepOne = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
