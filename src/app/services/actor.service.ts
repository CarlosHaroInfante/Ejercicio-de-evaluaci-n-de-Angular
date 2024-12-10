import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Actor {
  id: number;
  categoria: string;
  peliculas: string[];
  personaje: string;
  nombreReal: string;
  edad: number;
  nacionalidad: string;
  fechaNacimiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiURL = 'http://localhost:3000/actores'; //url de la api

  constructor(private http: HttpClient) { }

  getActoresPorCategoria(categoria: string): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.apiURL}?categoria=${categoria}`);  // Filtra por categoría
  }

  agregarActor(actor: Partial<Actor>): Observable<Actor> {
    return this.http.post<Actor>(this.apiURL, actor);  // Envia un POST al backend
  }
}

