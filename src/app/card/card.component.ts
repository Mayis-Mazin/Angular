import { Component } from '@angular/core';
@Component({
    selector:'app-card',
    templateUrl :'./card.component.html',
})
export class CardComponent{
    Weight:number=10;
    height:number=160.3
    heartBeat:number=105
    userStatus: string='offline'
constructor(){
    this.userStatus
}
    getUserStatus(){
        return this.userStatus=Math.random()>0.5?'online':'offline';
    }
  
}