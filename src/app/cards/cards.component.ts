import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  template:'<app-card></app-card><app-card></app-card>',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  allowNewPatient=false;
  userCreationStatus='No user was created'
  userName='TestUser'
  constructor() {
    setTimeout(()=>{
      this.allowNewPatient=true;
    },2000)
   }

  ngOnInit(){
  }

  onCreateUser(){
    this.userCreationStatus='User Was Created'+this.userName
  }
  onUpdateUserName(event: Event){
    this.userName=(<HTMLInputElement>event.target).value;
  }

}
