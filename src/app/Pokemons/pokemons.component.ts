import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { IPokemonBase } from './IPokemonBase';

@Component({
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:IPokemonBase[] = [];
  private limitPokemons:number = 15;
  private offset: number = 0;
  private sortBy: string = 'id';
  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons():void{
    this.pokemonService.getPokemonsList(this.limitPokemons, this.offset).subscribe({
      next: responseData =>{
        this.pokemons = this.pokemons.concat(responseData);
        (this.sortBy==='id') ? this.sortById(): this.sortByName();
        this.offset += this.limitPokemons; 
      }
    });
  }

  sortByName(): void{
    this.pokemons = this.pokemons.sort(this.sortByNameAsc);
    this.sortBy = 'name';
  }

  sortById(): void{
    this.pokemons = this.pokemons.sort(this.sortByIdAsc);
    this.sortBy = 'id';
  }

  private sortByNameAsc(p1: IPokemonBase, p2: IPokemonBase): number{
    if(p1.name > p2.name){
        return 1;
    }
    else if(p1.name === p2.name){
        return 0;
    }
    else{
        return -1
    }
  }

  private sortByIdAsc(p1: IPokemonBase, p2: IPokemonBase): number{
    if(p1.id > p2.id){
        return 1;
    }
    else if(p1.id === p2.id){
        return 0;
    }
    else{
        return -1
    }
  }
}
