import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from '../IPokemon';

@Component({
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{
  pokemonInfo!: IPokemon;
  description!:string;
  constructor(private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {

        this.route.data.subscribe(({pokemon})=>{
          this.pokemonInfo = pokemon;
        });

        this.route.data.subscribe(({specie})=>{
          this.description = specie.flavor_text_entries[0].flavor_text;
        });
  }

  onBack():void{
    this.router.navigate(['/pokemons']);
  }
}
