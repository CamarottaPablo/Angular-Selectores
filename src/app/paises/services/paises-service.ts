import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSmall, Pais } from '../interfaces/paises.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v3.1/'
  private _baseUrl2: string = 'https://restcountries.com/v2';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones() {
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient ) { }


  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {

    const url: string = `${ this._baseUrl }/region/${ region }?fields=name,cca3`
    return this.http.get<PaisSmall[]>( url );

  }

  getPaisPorCodigo( codigo: string ): Observable<Pais | null> {

    if( !codigo ) {
      return of(null)
    }
    
    const url= `${ this._baseUrl2 }/alpha/${ codigo }`;
    return this.http.get<Pais>( url )

  }


}
