import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ListaPokemon } from '../../components/lista-pokemon/lista-pokemon';
import { FotoPokemon } from '../../components/foto-pokemon/foto-pokemon';
import { Pokemon } from '../../services/pokemon';
import { Result } from '../../services/models/data';

@Component({
  selector: 'app-home',
  imports: [ListaPokemon, FotoPokemon],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  @ViewChild('tarjetas') tarjetasElement!: ElementRef;
  readonly #Pokemon = inject(Pokemon);
  protected listaPokemon: Result[] = [];
  
  pagina:number=1;
  cargando:boolean=false;
  ngOnInit(): void {
    this.cargarLista();
  }
  
  async cargarLista()
  {
    this.cargando=true;
    this.listaPokemon = [... this.listaPokemon, ... await this.#Pokemon.getByPage(this.pagina)];
    this.cargando=false;
    this.pagina++;
  }
  onScroll(e:any)
  {
    if(this.cargando) return;
    if(Math.round(this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop)
    === e.srcElement.scrollHeight)
  {
    this.cargarLista();
  }
  }

  tarjetaClickeada(e:string)
  {
    console.log(e);
  }
}
