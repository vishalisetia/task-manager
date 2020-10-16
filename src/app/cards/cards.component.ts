import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent implements OnInit {

  @Input() appStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  onNewCard() {

  }

}
