import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeResponse } from '../models/episodio.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes(page: number = 1): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.apiUrl}?page=${page}`);
  }
}
