import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  template:'<app-card></app-card><app-card></app-card>',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

}