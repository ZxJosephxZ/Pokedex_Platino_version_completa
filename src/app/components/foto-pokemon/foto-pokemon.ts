import { Component, Input } from '@angular/core';
import { Pokemon_struct } from '../../services/models/pokemon.models';


@Component({
  selector: 'app-foto-pokemon',
  imports: [],
  templateUrl: './foto-pokemon.html',
  styleUrl: './foto-pokemon.css'
})
export class FotoPokemon {
  @Input() pokemon?: Pokemon_struct; 
}
