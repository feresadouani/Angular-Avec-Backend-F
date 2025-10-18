import { Component } from '@angular/core';
import { Event } from '../../../models/event';
import { ApiService } from '../../../service/api.service';

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
  eventList: any[] = [];
  incLikes(event: Event) {
    return this.ApiService.Addlikes(event.id).subscribe({
      next: (data) => {
        event.nbrLikes++;
      },
      error: (error) => {
        console.error('Error adding like:', error);
      }
    });
  }

  buy(event: Event) {
    return this.ApiService.BuyEvent(event.id).subscribe({
      next: (data) => {
        event.nbPlaces--;
      },
      error: (error) => {
        console.error('Error purchasing event:', error);
      }
    });
  }

  dateExpire(event: Event) {
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
      next: (data: any[]) => {
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
