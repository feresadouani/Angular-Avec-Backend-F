import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelEvent } from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8081';

  getAllEvents(): Observable<ModelEvent[]> {
    return this.http.get<ModelEvent[]>(`${this.baseUrl}/events/all`);
  }
  Addlikes(id: number): Observable<ModelEvent> {
    return this.http.put<ModelEvent>(`${this.baseUrl}/events/like/${id}`, null);
  }
  BuyEvent(id: number): Observable<ModelEvent> {
    return this.http.put<ModelEvent>(`${this.baseUrl}/events/updatePalces/${id}`, null);
  }
  getEventByid(id: number): Observable<ModelEvent> {
    return this.http.get<ModelEvent>(`${this.baseUrl}/events/${id}`);
  }
  AjoutEvent(Event: ModelEvent): Observable<ModelEvent> {
    return this.http.post<ModelEvent>(`${this.baseUrl}/events/add`, Event);
  }
}