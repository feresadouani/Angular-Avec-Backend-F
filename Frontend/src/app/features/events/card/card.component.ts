import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModelEvent } from '../../../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private Router: Router) { }
  @Input() event!: ModelEvent;
  @Output() notifLike: EventEmitter<ModelEvent> = new EventEmitter();
  @Output() notifBuy: EventEmitter<ModelEvent> = new EventEmitter();


  likeEvent(e: ModelEvent) {
    this.notifLike.emit(e);
  }

  buyEvent(e: ModelEvent) {
    this.notifBuy.emit(e);
  }

  dateExpire(event: ModelEvent) {
    return new Date(event.date) < new Date();
  }

  participate(id: number, prix: number) {
    this.Router.navigate(['events/participate', id, prix])
  }

}
