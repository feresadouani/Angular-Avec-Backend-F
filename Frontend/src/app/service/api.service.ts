import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8081';

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/events/all`);
  }
  Addlikes(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/events/like/${id}`, null);
  }
  BuyEvent(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/events/updatePalces/${id}`, null);
  }
  getEventByid(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/events/${id}`);
  }
 AjoutEvent(Event: Event): Observable<Event> {
  return this.http.post<Event>(`${this.baseUrl}/events/add`, Event);
}
}