import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from './card.model';

export class CardService {
    private cards: Card[] = [
        new Card('done 2', 'this is a description', 'done'),
        new Card('todo 1', 'this is a description', 'todo'),
        new Card('todo 2', 'this is a description', 'todo'),
        new Card('doing 1', 'this is a description', 'doing'),
        new Card('done 1', 'this is a description', 'done'),
    ];

    cardSelected = new EventEmitter<Card>();
    // cardSelected = new Subject<Card>();
    cardsChanged = new Subject<Card[]>();

    getAllCards() {
        return this.cards.slice();
    }

    getCardsByStatus(status: String) {
        return this.cards.slice().filter(card => card.status == status);
    }

    getCard(index: number) {
        return this.cards[index];
    }

    addCard(card: Card) {
        this.cards.push(card);
        this.cardsChanged.next(this.cards.slice());
    }

    updateCard(index: number, newCard: Card) {
        this.cards[index] = newCard;
        this.cardsChanged.next(this.cards.slice());
    }

    deleteCard(index: number) {
        this.cards.splice(index, 1);
        this.cardsChanged.next(this.cards.slice());
    }

    setCards(cards: Card[]) {
        this.cards = cards;
        this.cardsChanged.next(this.cards.slice());
    }

}