import { Component, inject, OnInit } from '@angular/core';
import { ListaPokemon } from '../../components/lista-pokemon/lista-pokemon';
import { FotoPokemon } from '../../components/foto-pokemon/foto-pokemon';
import { Pokemon } from '../../services/pokemon';

@Component({
  selector: 'app-home',
  imports: [ListaPokemon, FotoPokemon],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  readonly #Pokemon = inject(Pokemon);
  ngOnInit(): void {
    this.#Pokemon.getByPage();
  }
  

}
