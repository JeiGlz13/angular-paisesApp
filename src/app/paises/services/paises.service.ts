import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countriesResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    
    return this.http.get<Country[]>(url);
    // .pipe(catchError(err=> of([])));
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPorCodigo(id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarPorRegion(termino: string){
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
