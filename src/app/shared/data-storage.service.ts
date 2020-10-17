import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../cards/card.service';
import { Card } from '../cards/card.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private cardsService: CardService) { }
    storeCards() {
        const cards = this.cardsService.getAllCards();
        this.http
            .put('https://ng-course-todo.firebaseio.com/cards.json', cards)
            .subscribe(response => {
                console.log(response);
            });
    }
    fetchCards() {
        return this.http
            .get<Card[]>('https://ng-course-todo.firebaseio.com/cards.json')
            .pipe(
                tap(response => {
                    this.cardsService.setCards(response);
                })
            )
    }
}