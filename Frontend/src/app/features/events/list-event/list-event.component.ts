import { Component } from '@angular/core';
import { ApiService } from '../../../shared/service/api.service';
import { ModelEvent } from '../../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  ngOnInit(): void {
    this.getAllEvents();
  }
  searchItem: string = "";

  constructor(private ApiService: ApiService) { }
  eventList: ModelEvent[] = [];
  incLikes(event: ModelEvent) {
    return this.ApiService.Addlikes(event.id).subscribe({
      next: (data) => {
        event.nbrLikes++;
      },
      error: (error) => {
        console.error('Error adding like:', error);
      }
    });
  }

  buy(event: ModelEvent) {
    return this.ApiService.BuyEvent(event.id).subscribe({
      next: (data) => {
        event.nbPlaces--;
      },
      error: (error) => {
        console.error('Error purchasing event:', error);
      }
    });
  }

  dateExpire(event: ModelEvent) {
    return new Date(event.date) < new Date();
  }


  filter() {
    return this.eventList.filter(eventitem =>
      eventitem.titre.toLowerCase().includes(this.searchItem.toLowerCase()) ||
      eventitem.lieu.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }

  getAllEvents(): void {
    this.ApiService.getAllEvents().subscribe({
      next: (data: ModelEvent[]) => {
        this.eventList = data.map(event => ({
          ...event,
          date: new Date(event.date)
        }));
      },
      error: (error) => {
        console.error('Error fetching events:', error);
      }
    });
  }
}
