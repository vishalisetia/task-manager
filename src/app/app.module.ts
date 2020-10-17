import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardItemComponent } from './cards/card-list/card-item/card-item.component';
import { CardService } from './cards/card.service';
import { NewCardComponent } from './cards/new-card/new-card.component';
import { CardEditComponent } from './cards/card-edit/card-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    CardListComponent,
    CardItemComponent,
    NewCardComponent,
    CardEditComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
