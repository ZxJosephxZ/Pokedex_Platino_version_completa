import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Result } from '../../services/models/data';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Pokemon_struct } from '../../services/models/pokemon.models';

@Component({
  selector: 'app-lista-pokemon',
  imports: [TitleCasePipe, NgClass],
  templateUrl: './lista-pokemon.html',
  styleUrl: './lista-pokemon.css'
})
export class ListaPokemon implements OnChanges{
ngOnChanges(): void {
  this.obtenerNumero();
}
@Input() data?: Result;
@Input() seleccionado: boolean = false;
@Input() fullData?:Pokemon_struct;
@Output() clickeado = new EventEmitter<string>();
id:string="0";

obtenerNumero()
{
  if(this.data && this.data.url != "")
  {
    this.id = this.data.url.substring(34,this.data.url.length - 1);
    return
  }
  if(this.fullData)
  {
    this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
    this.data = {
      name: this.fullData.species.name,
      url: ""
    }
  }
}
}
