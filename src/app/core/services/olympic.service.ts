import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Olympic } from '../models/olympic.model';

@Injectable({
  providedIn: 'root'
})
export class OlympicService {
  private apiUrl = 'assets/mock/olympic.json';

  constructor(private http: HttpClient) { }

  getOlympics(): Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.apiUrl);
  }

  getCountryByName(countryName: string): Observable<Olympic | undefined> {
    return this.getOlympics().pipe(
      map(data => data.find(c => c.country === countryName))
    ); 
  }
}