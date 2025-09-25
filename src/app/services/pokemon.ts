import { Injectable } from '@angular/core';
import { Result } from './models/data';
import { Pokemon_struct } from './models/pokemon.models';
@Injectable({
  providedIn: 'root'
})
export class Pokemon {
  readonly #pokeUrl = "https://pokeapi.co/api/v2/pokemon";

  async getByPage(pagina:number, size:number = 40): Promise<Result[]>
  {
    if (pagina > 5) return [];
    const offset = size * (pagina - 1);
    const res = await fetch(`${this.#pokeUrl}/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results;
    return [];
  }

  async getById(id:string):Promise<Pokemon_struct>
  {
    const res = await fetch(`${this.#pokeUrl}/${id}`);
    const resJson = await res.json();
    return resJson;
  }

  async getDescription(id:string | number): Promise<string>
  {
    const res = await fetch(`${this.#pokeUrl}-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) => texto.language.name === "es");
    return texto.flavor_text;
  }

}
