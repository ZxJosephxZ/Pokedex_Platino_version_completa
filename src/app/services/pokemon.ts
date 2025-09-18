import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Pokemon {
  readonly #pokeUrl = "https://pokeapi.co/api/v2/pokemon";

  getByPage()
  {
    fetch(`${this.#pokeUrl}/?limit=20&offset=20`)
  }
}
