import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }


}
