import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEventComponent } from './list-event/list-event.component';
import { ApiService } from '../../service/api.service';
import { CardComponent } from './card/card.component';
import { CapitalizeFirstPipe } from '../../shared/pipes/capitalize-first.pipe';
import { AddEventComponent } from './add-event/add-event.component';
import { ParticipationFormComponent } from './participation-form/participation-form.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailsComponent,
    CardComponent,
    AddEventComponent,
    ParticipationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService
  ]
})
export class EventsModule { }
