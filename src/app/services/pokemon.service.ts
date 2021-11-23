import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  getPokemon(numb: number) {
    const number: Number = Math.floor(Math.random() * (numb - 1 + 1) + 1);



    return this.http.get(`${this.url}/${number}`)
  }

}
