import { Component } from '@angular/core';
@Component({
    selector:'app-card',
    templateUrl :'./card.component.html'
})
export class CardComponent{
    Weight:number=10;
    height:number=160.3
    heartBeat:number=105
    cardStatus: string='offline'

    getCardStatus(){
        return this.cardStatus;
    }
}