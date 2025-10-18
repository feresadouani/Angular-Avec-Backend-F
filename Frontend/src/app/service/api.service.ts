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
  Addlikes(id:number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/events/like/${id}`, null);
  }
  BuyEvent(id:number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/events/updatePalces/${id}`, null);
  }
}