import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  id: number;
  editMode = false;
  cardForm: FormGroup;

  constructor(private route: ActivatedRoute, private cardService: CardService, private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let cardTitle = '';
    let cardDescription = '';
    let cardStatus = '';
    if (this.editMode) {
      const card = this.cardService.getCard(this.id);
      cardTitle = card.title;
      cardDescription = card.description;
      cardStatus = card.status;
    }
    this.cardForm = new FormGroup({
      'title': new FormControl(cardTitle),
      'description': new FormControl(cardDescription),
      'status': new FormControl(cardStatus)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.cardService.updateCard(this.id, this.cardForm.value);
    } else {
      this.cardService.addCard(this.cardForm.value);
    }
    this.dataStorageService.storeCards();
  }

  onCancel() {
  }

}

