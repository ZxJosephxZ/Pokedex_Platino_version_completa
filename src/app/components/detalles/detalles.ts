import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListaPokemon } from "../lista-pokemon/lista-pokemon";
import { Pokemon_struct } from '../../services/models/pokemon.models';
import { Pokemon } from '../../services/pokemon';

@Component({
  selector: 'app-detalles',
  imports: [ListaPokemon],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css'
})
export class Detalles implements OnChanges{
  @Input() caracteristicas?:Pokemon_struct;
  description:string = "";
  readonly pokemonCaracteristicas = inject(Pokemon);
  ngOnChanges(): void {
    if(this.caracteristicas)
    {
      this.pokemonCaracteristicas.getDescription(this.caracteristicas?.id).then(
        res => {  this.description = res}
      );
    }
  }

}

