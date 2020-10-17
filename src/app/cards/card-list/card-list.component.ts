import { Component, Input} from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cards: Card[];
  @Input() status: string;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCardsByStatus(this.status);
  }


}
