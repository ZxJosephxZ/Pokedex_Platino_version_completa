import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Result } from '../../services/models/data';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-lista-pokemon',
  imports: [TitleCasePipe],
  templateUrl: './lista-pokemon.html',
  styleUrl: './lista-pokemon.css'
})
export class ListaPokemon implements OnChanges{
ngOnChanges(): void {
  this.obtenerNumero();
}
@Input() data?: Result;
@Output() clickeado = new EventEmitter<string>();
id:string="0";

obtenerNumero()
{
  if(this.data)
  {
    this.id = this.data.url.substring(34,this.data.url.length - 1);
  }
}
}
