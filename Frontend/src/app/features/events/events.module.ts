import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import { ListEventComponent } from './list-event/list-event.component';
import { ApiService } from '../../service/api.service';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class EventsModule { }
