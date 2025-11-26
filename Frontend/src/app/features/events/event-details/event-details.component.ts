import { Component } from '@angular/core';
import { ApiService } from '../../../shared/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ModelEvent } from '../../../models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  id!: number;
  eventDetails!: ModelEvent;
  constructor(private ApiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getEventDetails(this.id);
  }


  getEventDetails(id: number): void {
    this.ApiService.getEventByid(id).subscribe({
      next: (data: ModelEvent) => {
        console.log(data);
        this.eventDetails = {
          ...data,
          date: new Date(data.date)
        };
      },
      error: (error) => {
        console.error('Error fetching event details:', error);
      }
    });
  }
}