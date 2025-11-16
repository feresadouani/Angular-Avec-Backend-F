import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() event!: Event;
  @Output() notifLike: EventEmitter<Event> = new EventEmitter();
  @Output() notifBuy: EventEmitter<Event> = new EventEmitter();


  likeEvent(e: Event) {
    this.notifLike.emit(e);
  }

  buyEvent(e: Event) {
    this.notifBuy.emit(e);
  }

  dateExpire(event: Event) {
    return new Date(event.date) < new Date();
  }

}
