import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../card.model';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.cardService.cardSelected.emit(this.card);
  }
}
